import { Injectable } from '@angular/core';
import { Point } from '../Interfaces/point.interface';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor() { }

  /**
   * Gets the points
   * TODO: Add API connection here
   */
  public getPoints(): Point[] {
    return [
      {
        coordinates: [-2.008717, 29.920433],
        fertilize: true,
        water: false,
      },
      {
        coordinates: [-2.008901, 29.920356],
        fertilize: true,
        water: true
      },
      {
        coordinates: [-2.008882, 29.920037],
        fertilize: false,
        water: false
      },
      {
        coordinates: [-2.008701, 29.920025],
        fertilize: false,
        water: true
      },
      {
        coordinates: [-2.008780, 29.920193],
        fertilize: false,
        water: false
      },
    ]
  }

  /**
   * Sets the correspondend icons for a point arrray, dependent on fertilize and water attributes
   */
  setIconsAndDescriptions(points: Point[]) {
    for (let point of points) {
      if (point.fertilize && point.water) {
        point.icon = "assets/icons/both.svg";
        point.description = "Missing water and fertilizer"
      } else if (point.fertilize) {
        point.icon = "assets/icons/fertilize.svg";
        point.description = "Missing fertilizer"
      } else if (point.water) {
        point.icon = "assets/icons/water.svg";
        point.description = "Missing water"
      } else {
        point.icon = "assets/icons/plant.svg";
        point.description = "All fine"
      }
    }
  }
}
