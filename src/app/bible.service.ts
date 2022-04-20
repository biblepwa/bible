import { Injectable } from '@angular/core';
import Bible from '../assets/bible/Bible.json';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  // import Bible
  public bible = Bible;

  public pageTitle:string;

  public testament:number = Number(localStorage.getItem('curTestamentIndex')); // defaults to '0' (old testament) if '' or null - javascript is broken

  public bookSelected:number = Number(localStorage.getItem('curBookIndex')); // defaults to '0' (Genesis) see above

  public title: string = this.bible[this.testament].books[this.bookSelected].bookName || "Bible";

  public showChapters: boolean = false; /*for chapter highlighting MUST BE toggled 
                                (scroll through chapters doesn't work otherwise); 
                                set to 'true' in historyService.newBook() selection, but doesn't highligh to chapter 1; 
                                not working properly TODO;
                                */ 

  public displayMenu: boolean = false;
  public menuHistoryBook: boolean = false;

  public searchResults: any = "<br><h2>Search results will appear here...</h2>";
  public searchRequest: string = "Word or Words...";
  public searchNavigate = false;

  //variable for lefthand menu position
  public leftHandOn: string;

  //variable for chapter button display
  public chapterButton: boolean;
  public chapterNumber: string;

  //variable for spinner animation
  public spinner: boolean = false;
  public spinnerTitle: string;
 
    constructor() {}
}
