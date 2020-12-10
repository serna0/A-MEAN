import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition ,Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  label:string = '';

  constructor(public meta: Meta, public title: Title ,public router: Router) { 
    
    this.getDataRoute().subscribe( data => {
      this.label = data.titulo;
      this.title.setTitle(this.label);

      let metaTag: MetaDefinition = {
        name: 'descripcion',
        content: this.label
      }
      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute(){
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd) => evento.snapshot.data)
    )
  }

  ngOnInit(): void {

  }

}
