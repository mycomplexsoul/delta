import {
  Component,
  OnInit,
  Renderer2,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "cfg",
  templateUrl: "./cfg.template.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CfgComponent implements OnInit {
  ngOnInit(): void {}
}
