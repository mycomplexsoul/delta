import { Component, OnInit, Renderer } from "@angular/core";
import { Preset } from "../../crosscommon/entities/Preset";
import { PresetService } from "./preset.service";

@Component({
  selector: "preset",
  templateUrl: "./preset.template.html",
  providers: [PresetService]
})
export class PresetComponent implements OnInit {
  public viewData: {
    presetList: Preset[];
  } = {
    presetList: []
  };
  private services: {
    presetService: PresetService;
  } = {
    presetService: null
  };

  constructor(presetService: PresetService) {
    this.services.presetService = presetService;
  }

  ngOnInit() {
    this.services.presetService.getAll().then(list => {
      this.viewData.presetList = list;
    });
  }

  showNewPresetForm() {}
}
