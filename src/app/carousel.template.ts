<div class="carousel-component">
<ng-container *ngIf="validImages().length > 0; else noImages">
    <img
    [src]="validImages()[current]"
    [alt]="altTexts[current] || 'Imagen ' + (current + 1)"
    style="width: 100%; height: auto; border-radius: 8px;"
    />
    <div style="text-align: center; margin-top: 8px;">
    <span
        *ngFor="let img of validImages(); let idx = index"
        (click)="goTo(idx)"
        [attr.aria-label]="'Ir a la imagen ' + (idx + 1)"
        [ngStyle]="{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: idx === current ? '#333' : '#ccc',
        margin: '0 4px',
        cursor: 'pointer'
        }"
    ></span>
    </div>
</ng-container>
<ng-template #noImages>
    <div>No hay imágenes válidas.</div>
</ng-template>
</div>
