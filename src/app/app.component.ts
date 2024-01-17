import { Component, OnInit } from '@angular/core';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

const TOKEN ='pk.eyJ1IjoibWFyb29uZWRpb25lIiwiYSI6ImNqdmp0MzB1azBpcDAzem1naHZwMjNndGIifQ.65nvvRg9QeFUV2c6b9W4Vw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
public map!: mapboxgl.Map;
public draw: MapboxDraw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true
  },
  defaultMode: 'draw_polygon'
});

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/standard',
      center: [-91.874, 42.76],
      zoom: 12,
      accessToken: TOKEN
    });
    this.map.addControl(this.draw);
    this.map.addControl(new mapboxgl.NavigationControl());
  };
}
