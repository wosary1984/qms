import { Component, OnInit, Input, Inject } from '@angular/core';
import { MenuService } from 'src/app/service/menu/menu.service';

declare var $: any;

@Component({
    selector: 'app-control-sidebar',
    templateUrl: './controlsidebar.component.html',
    styleUrls: ['./controlsidebar.component.css'],
    providers: [MenuService]
})
export class ControlSidebarComponent implements OnInit {


    constructor(@Inject('auth') private service, private menuSerive: MenuService) { }

    ngOnInit() {
        //this._createNewTab();
        this._init()
    }

    _init() {
        // Add the layout manager
        let that = this;
        
       
        $('[data-layout]').on('click', function () {
            that.changeLayout($(this).data('layout'))
        })

        //left sidebar expand on hover
        $('[data-enable="expandOnHover"]').on('click', function () {
            $(this).attr('disabled', true)
            let $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu')
            $pushMenu.expandOnHover()
            if (!$('body').hasClass('sidebar-collapse'))
                $('[data-layout="sidebar-collapse"]').click()
        })

        //right sidebar toggle
        $('[data-controlsidebar]').on('click', function () {
            let $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
            that.changeLayout($(this).data('controlsidebar'))
            let slide = !$controlSidebar.options.slide

            $controlSidebar.options.slide = slide
            if (!slide)
                $('.control-sidebar').removeClass('control-sidebar-open')
        })

        //right sidebar  skin
        $('[data-sidebarskin="toggle"]').on('click', function () {
            var $sidebar = $('.control-sidebar')
            if ($sidebar.hasClass('control-sidebar-dark')) {
                $sidebar.removeClass('control-sidebar-dark')
                $sidebar.addClass('control-sidebar-light')
            } else {
                $sidebar.removeClass('control-sidebar-light')
                $sidebar.addClass('control-sidebar-dark')
            }
        })

    }

    /** Toggles layout classes
    *
    * @param String cls the layout class to toggle
    * @returns void
    */
    changeLayout(cls: string) {
        let $layout = $('body').data('lte.layout')
        let $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')

        $('body').toggleClass(cls)
        $layout.fixSidebar()
        if ($('body').hasClass('fixed') && cls == 'fixed') {
            $layout.activate()
        }
        $controlSidebar.fix()
    }


}