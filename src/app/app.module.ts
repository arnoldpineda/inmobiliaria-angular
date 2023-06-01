import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { ProductoService } from './servicios/producto.service';
import { EditarProductoComponent } from './pagina/editar-producto/editar-producto.component';
import { GestionQuejaComponent } from './pagina/gestion-queja/gestion-queja.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { ListarQuejasComponent } from './pagina/listar-quejas/listar-quejas.component';
import { CrearQuejaComponent } from './pagina/crear-queja/crear-queja.component';
import { BuscarQuejaComponent } from './pagina/buscar-queja/buscar-queja.component';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearProductoComponent,
    GestionQuejaComponent,
    BusquedaComponent,
    DetalleProductoComponent,
    GestionProductosComponent,
    EditarProductoComponent,
    CarritoComponent,
    AlertaComponent,
    ListarQuejasComponent,
    CrearQuejaComponent,
    BuscarQuejaComponent,
    RevisarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductoService, { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
