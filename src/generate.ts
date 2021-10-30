import fs = require('fs');
import path = require('path');
import minimist = require("minimist");
import { ModifierDesc } from "./modifier-types";
import { GIR2TS } from "./gir2ts";

function main() {
    console.log(__dirname);
    const argv = minimist(process.argv.slice(2));
    let gir_files: string[] = [];
    let outdir = __dirname;
    let exclude_json_map: { [class_name: string]: any } = {};
    let modifier_json_map: { [lib_name: string]: ModifierDesc } = {};
    if (argv.outdir) {
        console.log("Output typings directory: " + argv.outdir);
        outdir = path.join(__dirname, argv.outdir);
        if (fs.statSync(outdir).isDirectory()) {
        } else {
            throw new Error("out dir specified is not a directory.");
        }
    } else {
        throw new Error("No out dir specified.");
    }
    if (argv.overridesdir) {
        console.log("Excludes directory: " + argv.overridesdir);
        let dir = path.join(__dirname, argv.overridesdir);
        let json_files: string[] = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
        for (let json_file of json_files) {
            let lib_name = path.basename(json_file, '.json');
            let data = fs.readFileSync(json_file, 'utf8');
            exclude_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.modifiersdir) {
        console.log("Modifiers directory: " + argv.modifiersdir);
        let dir = path.join(__dirname, argv.modifiersdir);
        let json_files: string[] = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
        for (let json_file of json_files) {
            let lib_name = path.basename(json_file, '.json');
            let data = fs.readFileSync(json_file, 'utf8');
            modifier_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.girdir) {
        console.log("GIR directory: " + argv.girdir);
        let dir = path.join(__dirname, argv.girdir);
        if (fs.statSync(dir).isDirectory()) {
            gir_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
    } else {
        // gir_files.push(path.join(__dirname, argv._[0]));
        gir_files = gir_files.concat(argv._.map((arg) => path.join(__dirname, arg)));
    }
    const gir_xml_list: { lib_name: string; xml_str: string }[] = [];
    for (let file of gir_files) {
        const gir_name = path.basename(file, '.gir');
        let data = '';
        try {
            data = fs.readFileSync(file, 'utf8');
        } catch (e) {
            if (e instanceof Error)
                console.log(e.message);
            return;
        }
        gir_xml_list.push({
            lib_name: gir_name,
            xml_str: data

        });
    }

    const gen = new GIR2TS.Generator(gir_xml_list, exclude_json_map, modifier_json_map);
    gen.generateTypings((res) => {
        for (let lib of res) {
            let outfile = path.join(outdir, lib.gir_name + '.d.ts');
            try {
                fs.writeFileSync(outfile, lib.typing_str);
            } catch (err) {
                if (err instanceof Error)
                    console.log(err.message);
                return;
            }
            console.log("wrote to " + outfile);
        }
    });
}

main();