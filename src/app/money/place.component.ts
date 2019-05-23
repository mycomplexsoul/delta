import { Component, OnInit, Renderer } from "@angular/core";
import { Place } from "../../crosscommon/entities/Place";
import { PlaceService } from "./place.service";

@Component({
  selector: "place",
  templateUrl: "./place.template.html",
  providers: [PlaceService]
})
export class PlaceComponent implements OnInit {
  public viewData: {
    placeList: Place[];
  } = {
    placeList: []
  };
  private services: {
    placeService: PlaceService;
  } = {
    placeService: null
  };

  constructor(placeService: PlaceService) {
    this.services.placeService = placeService;
  }

  ngOnInit() {
    this.services.placeService.getAll().then(list => {
      this.viewData.placeList = list;
    });
  }

  showNewPlaceForm() {}
}
