import { Directive, Input, OnInit, ElementRef, Renderer2 } from "@angular/core";

import { AuthService, AccessControlService } from "src/app/core/services";

@Directive({
    selector: '[accessControl]'
})
export class AccessControlDirective implements OnInit {

    @Input("moduleType") moduleType!: string;
    @Input("accessType") accessType!: string;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private authService: AuthService,
        private accessControlService: AccessControlService
    ) { }

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', "none");
        this.checkAccess();
    }

    async checkAccess() {
        const userInfo = await this.authService.getUserInfo();
        const accessControls: any = this.accessControlService.getAccessControls(userInfo.role);
        const module: any = accessControls.find((access: any) => access.module_name === this.moduleType);
        this.elementRef.nativeElement.style.display = module[this.accessType] ? "block" : "none";
    }
}