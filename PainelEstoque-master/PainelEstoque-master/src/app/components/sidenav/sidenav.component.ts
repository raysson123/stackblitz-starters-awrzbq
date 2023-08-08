import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbarData} from './nav-data';
import {SideNavToggle} from '../../interfaces/side-nav-toggle';
import {closeAnimation, sideNavInAnimation} from "../../animations/sidenav-menu.animation";
import {INavbarData} from "../../interfaces/inavbar-data";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [sideNavInAnimation, closeAnimation]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit() {
    // Inicializar o valor do screenWidth com a largura atual da janela
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    // Inverter o valor de collapsed
    this.collapsed = !this.collapsed;
    // Emitir o evento onToggleSidenav com o novo valor de collapsed e screenWidth
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    // Fechar o sidenav definindo collapsed como false
    this.collapsed = false;
    // Emitir o evento onToggleSidenav com o valor de collapsed atualizado e screenWidth
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelIte of this.navData) {
        if (item !== modelIte && modelIte.expanded) {
          modelIte.expanded = false;
        }
      }
    }
    item.expanded =!item.expanded;
  }
}
