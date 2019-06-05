import { iNode } from "../iNode";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";

export class FileOrganizerServer {
  listTest = (node: iNode) => {
    const folder = "../../";
    fs.readdir(folder, (err, files) => {
      node.response.end(
        JSON.stringify({
          operationResult: true,
          message: "listing ok.",
          list: files,
          error: err
        })
      );
    });
  };

  //moves the $file to $dir2
  moveFile = (file, dir2) => {
    //gets file name and adds it to dir2
    const f = path.basename(file);
    const dest = path.resolve(dir2, f);

    fs.rename(file, dest, err => {
      if (err) throw err;
      else console.log("Successfully moved");
    });
  };

  //moves the $file to $dir2
  moveFile2 = (file, dir2) => {
    //gets file name and adds it to dir2
    const f = path.basename(file);
    const source = fs.createReadStream(file);
    const dest = fs.createWriteStream(path.resolve(dir2, f));

    source.pipe(dest);
    source.on("end", () => {
      fs.unlinkSync(file);
    });
  };

  //copy the $file to $dir2
  copyFile = (file, dir2) => {
    //gets file name and adds it to dir2
    const f = path.basename(file);
    const source = fs.createReadStream(file);
    const dest = fs.createWriteStream(path.resolve(dir2, f));

    source.pipe(dest);
    source.on("end", function() {
      console.log("Succesfully copied");
    });
    source.on("error", function(err) {
      console.log(err);
    });
  };

  backup = (node: iNode) => {
    const CONFIG = [
      {
        s: "../../others/vlc-snaps",
        d: "K:/data-2019/vlc-snapshots-2019"
      },
      {
        s: "C:/Users/Daniel/Videos/Captures",
        d: "K:/data-2019/game-screenshots-2019"
      },
      {
        s: "C:/data/comprobantes/to-backup",
        d: "K:/personal-data-2019/comprobantes-monetarios-2019"
      },
      {
        s: "C:/data/downloads/torend-2019Q1/nipponsei-to-backup",
        d: "E:/downloads-arranged/nipponsei-2019"
      }
    ];

    CONFIG.forEach(({ s, d }) => {
      this.moveFromDirToDir(s, d);
    });

    node.response.end(
      JSON.stringify({
        operationResult: true,
        message: `backup finished.`
      })
    );
  };

  moveFromDirToDir = (origin: string, destination: string) => {
    const destinationList = [];

    fs.readdir(origin, (err, files) => {
      files.forEach(file => {
        this.moveFile2(path.join(origin, file), destination);
        destinationList.push(path.join(destination, file));
      });
      console.log(
        `${
          files.length
        } files moved correctly from ${origin} to ${destination}.`
      );

      return {
        operationResult: true,
        message: `${files.length} files moved correctly.`,
        list: destinationList,
        error: err
      };
    });
  };
}
