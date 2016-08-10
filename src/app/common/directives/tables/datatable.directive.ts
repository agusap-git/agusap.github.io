import {Directive, ElementRef, AfterViewInit} from '@angular/core';

declare var $ : any;

@Directive({
  selector: '[datatable]'
})
export class DatatableDirective implements AfterViewInit{
  el:any;

  constructor(private _elRef : ElementRef) {
    this.el = _elRef.nativeElement;
  }

  ngAfterViewInit(){
    var table = $(this.el).DataTable();

    $(this.el).children('tbody').on( 'click', 'tr', function () {
//      var rowIndex = $(this).index();
//      console.log("Index: " + table.row( this ).data());
      if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
      }
      else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
      }
    } );

/*
    var data = table
      .rows()
      .data();
    console.log("Length: " + data.length);
    ===========================
 $('#button').click( function () {
 table.row('.selected').remove().draw( false );
 } );
*/
  }
}
