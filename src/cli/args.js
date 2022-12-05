import { argv } from "node:process";

const parseArgs = () => {
  let args = "";

  argv.forEach((val, index) => {
    if (val.startsWith("--")) {
      args += `${val} is ${argv[index + 1]}, `;
    }
  });

  console.log(args.slice(0, -2));
};

parseArgs();
