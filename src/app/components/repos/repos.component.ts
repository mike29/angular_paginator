import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PaginateMakerService } from '../../services/paginate-maker.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private authService: DataService) {
  }

  paginateMakerService = new PaginateMakerService();
  private isFavorite;
  private favoriteGitStorage = "favoriteGit";
  private repos: any[];
  private itemsLength: number;
  private isVisible = true;
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.isVisible = true;
    this.authService.getData()
      .subscribe(data => {
        try {
            this.repos = [...data.items];
          } catch (e) {
          console.log('if Err: webpack failed to compile . make any changes in the code and rerun ng serve. ')
        }
        if (this.repos.length) {
          this.isVisible = false;
        }
        this.setPage(1);
      });
  }

  setPage(activePage: number) {
    // get pagination paging information
    this.pager = this.paginateMakerService.getPager(this.repos.length, activePage);
    // cut out 20 from the array of repos and assign to the viewed items
    this.pagedItems = this.repos.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pager.startIndex + ' : ' + this.pager.endIndex)
  }

  // Search
  reverse() {
    return this.pagedItems = this.pagedItems.reverse();
  }
  sort() {
    return this.pagedItems.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  }
  listPopular () {
    return this.pagedItems.sort((a, b) => a.stargazers_count < b.stargazers_count ? -1 : a.stargazers_count > b.stargazers_count ? 1 : 0)
  }
  mostPopular() {
    return this.pagedItems.sort((a, b) => a.stargazers_count > b.stargazers_count ? -1 : a.stargazers_count < b.stargazers_count ? 1 : 0)
  }
  // Local storage
  addFavorite(likedRepo,row) {
    DataService.insertData(this.favoriteGitStorage, likedRepo.name, likedRepo.url);
    this.toggleClass(row);
      }
  // TODO
  // getTasks runs unnecessarily many times when loading
 /* checkFavorite (repo,row) {
    let data = DataService.getTasks(this.favoriteGitStorage);
    for(let r of data) {
      console.log(repo);
    }
  }
  */

  toggleClass(row) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      row.classList.add("favorite_icon_green");
    }
    else {
      row.classList.remove("favorite_icon_green");
    }
  }

}
