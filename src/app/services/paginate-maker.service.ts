import { Injectable } from '@angular/core';

@Injectable()
export class PaginateMakerService {

  public getPager(itemsLength: number, activePage: number = 1, itemsPerPage: number = 20) {
    let startPage: number, endPage: number, indexOfStart:number =0, indexOfEnd:number=1;
    // get required page quantity
    let numberOfPages = Math.ceil(itemsLength / itemsPerPage);

    //Get active page
    activePage = this.getActivePageRange(activePage, numberOfPages);

    //Get the start and the end page. getStartEndPage() returns start and end
    let startEndPage = this.getStartEndPage(numberOfPages);
    startPage = startEndPage[indexOfStart];
    endPage = startEndPage[indexOfEnd];

    // calculate start and end item indexes of the viewItem
    let startIndex = (activePage - 1) * itemsPerPage;
    let endIndex = Math.min(startIndex + itemsPerPage - 1, itemsLength - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      totalItems: itemsLength, currentPage: activePage,pageSize: itemsPerPage,
      totalPages: numberOfPages, startPage: startPage, endPage: endPage,startIndex: startIndex,
      endIndex: endIndex, pages: pages
    };
  }

  public getActivePageRange(_activePage, _numberOfpages) {
    // Current page can't be less than one
    if (_activePage < 1) {
      _activePage = 1;
      // Check active page does't exceed the last page of the pagination
    } else if (_activePage > _numberOfpages) {
      _activePage = _numberOfpages;
    }
    return _activePage;
  }

  // Returns the start and the end page numbers
  //TODO
  // Aply a logic for more than 10 pages
  public getStartEndPage(allPages) {
    console.log('all' + allPages);
    let startPage: number, endPage: number, startEndPageValues = [];
    if (allPages <= 10) {
      startPage = 1;
      endPage = allPages;
    }
    // Add start and end values
    startEndPageValues.push(startPage);
    startEndPageValues.push(endPage);
    return startEndPageValues;
  }

}
