import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Search } from '../models/Search';
import { SearchService } from '../services/SearchImages';

@Component({
  selector: 'app-search-pics',
  templateUrl: './search-pics.component.html',
  styleUrls: ['./search-pics.component.css']
})
export class SearchPicsComponent implements OnInit {


  usersearch: Search;
  searchForm: FormGroup;
  constructor(private postService: SearchService) {
    this.searchForm = new FormGroup({
      searchKeyItem: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public get searchKeyItem() {
    return this.searchKeyItem.get('username');
  }

  doSearch() {
    this.postService.getPostData().subscribe((data) => {
      console.log(data['hits'])
    })
  }
}
