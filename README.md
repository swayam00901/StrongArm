# StrongArm safetyindex

This is generated with angular cli 1.5 and debugged using visual studio code , with Chrome Debugger extension and launch.json.

## Development server
## Build & Run

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Run `npm start` for a dev server. If port `4200` is busy , then use ` ng serve --port 4201 ( or any open port you like)` Navigate to `http://localhost:4200/ or new port you have mentioned`. The app will automatically reload if you change any of the source files.

## Debug using visual studio code
        Install Chrome Debugger extension.
        Put a break point in .ts file and Press F5 .
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Tips for managing nodejs processes and ports
        If Lots of nodejs processes are running in different ports , 
        run following command in cmd.exe . e.g. if your port 4200 is busy.
        netstat -ano | findstr :4200
        
        output:
        
         TCP    127.0.0.1:4200         0.0.0.0:0              LISTENING       8680
         TCP    127.0.0.1:4200         127.0.0.1:65267        ESTABLISHED     8680
         TCP    127.0.0.1:65267        127.0.0.1:4200         ESTABLISHED     13828
        
        To close port 4200:
        
        taskkill /PID 13828
        
         ** Kill all nodejs proceses
        taskkill /f /im node.exe

## Further help

To get more help on the Angular CLI use `ng help` 