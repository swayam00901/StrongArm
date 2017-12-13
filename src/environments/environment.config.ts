export class config {
    
        public static getEnvironmentVariable(value) {
            var environment:string;
            var data = {};
            environment = window.location.hostname;
            switch (environment) {
                case'localhost':
                    data = {
                        endPoint: 'http://rkscomdevweb1/storesinventoryservice/'
                    };
                    break;
                 case 'rkscomdevweb1':
                    data = {
                        endPoint: 'http://rkscomdevweb1/storesinventoryservice/'
                    };
                    break;
    
                default:
                    data = {
                        endPoint: 'https://dev.xxxx.com/'
                    };
            }
            return data[value];
        }
    }