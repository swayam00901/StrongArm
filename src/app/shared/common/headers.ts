import { Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

/*export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');*/

export const headers = new HttpHeaders()
.set("Content-Type", "application/json");
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Origin', 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS, TRACE');
headers.append('Access-Control-Allow-Origin', 'Content-Type');
