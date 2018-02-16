import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  constructor(public http: Http) { }

  searchTrack(query: string) {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    const queryURL: String = `https://api.spotify.com/v1/search/${params}`;
    return this.http.request(queryURL).map(res => res.json());
  }
}
