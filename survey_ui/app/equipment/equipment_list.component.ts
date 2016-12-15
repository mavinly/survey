import { Component, OnInit } from '@angular/core';

import { IEquipment } from './equipment';

export class EquipmentListComponent {
    pageTitle: string = 'Equipment List';
    equipment: IEquipment[];
}