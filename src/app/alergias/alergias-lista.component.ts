import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alergias-lista',
  templateUrl: './alergias-lista.component.html',
})

export class AlergiasListaComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public navigateToPlanta() {
    this.router.navigate(['planta'], { relativeTo: this.activatedRoute });
  }

  public navigateToForm() {
    this.router.navigate(['form'], { relativeTo: this.activatedRoute });
  }

}
