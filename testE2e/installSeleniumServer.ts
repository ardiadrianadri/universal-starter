import * as http from 'http';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as readline from 'readline';
import * as url from 'url';
import {spawn} from 'child_process';

fs.readJson('./package.json', (err, projectConfig) => {});


class ChromeSelenium {

    public selenium:http.RequestOptions;

    constructor(urlServer:string, proxyHost?:string, portHost?:number){

        const urlSelenium:url.Url = url.parse(urlServer);

        this.selenium = { method:'GET' };

        if (proxyHost){

            this.selenium.hostname = proxyHost;
            this.selenium.port = (portHost)?portHost:80;
            this.selenium.path = urlSelenium.href;

        } else {

            this.selenium.hostname = urlSelenium.hostname;
            this.selenium.path = urlSelenium.path; 
        }
    }
}

class DownloadFile {
    constructor(private options:http.RequestOptions, private path:string, private file:string){}

    public saveServer(){
        fs.mkdirp(this.path, (err) => {
            if (err) throw err;

            let file = fs.createWriteStream(path.join(this.path, this.file));

            http.request(this.options, (res) => {
                if (res.statusCode !== 200) throw new Error ('Status code: ' + res.statusCode);
                process.stdout.write('Downloading ' + this.file + ': ');
                res.pipe(file);
                res.on("data",() => {
                    process.stdout.write('#');
                });
                res.on("finish",()=> {
                    process.stdout.write('\n');
                });
            }).end();
        });
    }
}

fs.readJson('./package.json', (err, projectConfig) => {

    if (err) throw err;

    let chromeSelenium:ChromeSelenium = new ChromeSelenium(projectConfig.selenium.server, 
        (projectConfig.proxy.host)?projectConfig.proxy.host:null, 
        (projectConfig.proxy.port)?projectConfig.proxy.prot:null);

    let downloadSelenium:DownloadFile = new DownloadFile(chromeSelenium.selenium,projectConfig.selenium.pathServer,projectConfig.selenium.jar);
    downloadSelenium.saveServer();
});