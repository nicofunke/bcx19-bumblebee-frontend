import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/Interfaces/point.interface';
import { PointsService } from 'src/app/Services/points.service';

@Component({
  selector: 'app-recommendation-map',
  templateUrl: './recommendation-map.component.html',
  styleUrls: ['./recommendation-map.component.scss']
})
export class RecommendationMapComponent implements OnInit {

  constructor(public pointsService: PointsService) { }

  public points: Point[] = [];

  /**
   * On init: Get points and set icons for points
   */
  ngOnInit() {
    this.points = this.pointsService.getPoints();
    this.pointsService.setIconsAndDescriptions(this.points);
  }
}
