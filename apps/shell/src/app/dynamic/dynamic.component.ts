import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mf-demo-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  async ngAfterContentInit(): Promise<void> {
    const config = this.route.snapshot.data['config'];
    const module = await loadRemoteModule(config);
    const element = document.createElement(module.tagName);
    this.vc.nativeElement.appendChild(element);
  }
}
