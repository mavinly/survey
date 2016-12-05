import { Component, OnInit } from '@angular/core';
import { IEquipment } from './equipment';
import { EquipmentService } from './equipment.service';

export class EquipmentListComponent implements OnInit {
    errorMessage: string;
    equipment: IEquipment[];
    constructor(private _equipmentService: EquipmentService) {}

    ngOnInit(): void {
        this._equipmentService.getEquipment()
            .subscribe(equipment => this.equipment = equipment, 
            error => this.errorMessage = <any>error);
    }
}