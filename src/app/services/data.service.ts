import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Repository } from '../model/repository';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  _uri = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100';

  constructor(private http: HttpClient) { }

  // Gets API data
  getData() {
    try {
      return this.http.get(this._uri).map(res => res);
    } catch (e) {
      console.log(e.message);
    }
  }

  // Local Storage
  static getLocalRepos(storageName) {
    try {
      return JSON.parse(localStorage.getItem(storageName));
    } catch (e) {
      console.log(e.message);
    }
  }

  static setLocalRepos(storageName, value) {
    try {
      return  localStorage.setItem(storageName, JSON.stringify(value));
    } catch (e) {
      console.log(e.message);
    }
  }
  // Helps confirming data to be stored
  static insertData (storageName, name, uri) {
    let holdFetchedDataTemp = [];
    const toBeStored = new Repository();
    toBeStored._name = name;
    toBeStored._uri = uri;
    const dataAddress = localStorage.getItem(storageName);
    if (dataAddress === null) {
      holdFetchedDataTemp.push(toBeStored);
      this.setLocalRepos(storageName, holdFetchedDataTemp);
      return true;
    } else {
      try {
        // Todo
        // Call update here and remove reputation
        holdFetchedDataTemp = this.getLocalRepos(storageName);
        holdFetchedDataTemp.push(toBeStored);
        DataService.setLocalRepos(storageName, holdFetchedDataTemp);
        return true;
      } catch (e) {
        console.log(e.message);
        return false;
      }
    }
  }
  
  static updateLocalRepos(storageName, toBeStored) {
    let holdFetchedDataTemp = [];
    holdFetchedDataTemp = this.getLocalRepos(storageName);
    // TODO
    // Delete data that exists before updating
    holdFetchedDataTemp.push(toBeStored);
    DataService.setLocalRepos(storageName, holdFetchedDataTemp);
  }
}
