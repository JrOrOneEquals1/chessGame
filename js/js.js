let bClassList = ['bknight','bking','bqueen','bbishop','bpawn','brook']
let wClassList = ['wknight','wking','wqueen','wbishop','wpawn','wrook']
let classes = ['brook', 'bknight', 'bbishop', 'bqueen', 'bking','bpawn','wpawn','wrook','wknight','wbishop','wking','wqueen']
let others = true;
let bturn = false;
let wturn = true;
$(document).ready(function() {
  function run() {
    jQuery.removeData("table");
    if(wturn) {
      for(xi in wClassList){
        x = wClassList[xi];
        x = '.' + x;
        pawn_id = [];
        $(x).map(function() {
          pawn_id.push(this.id);
        });
        if(x == '.wpawn' && $(x).length > 0){
          times1 = $(".wpawn").length;
          while(times1 > 0){
            move(x, pawn_id);
            times1 -= 1;
          }
        }
        else if($(x).length > 0) {
          times1 = $(x).length;
          while(times1 > 0){
            move(x, pawn_id);
            times1 -= 1;
          }
        }
      }
    }
    if(bturn){
      for(xi in bClassList){
        x = bClassList[xi];
        x = '.' + x;
        pawn_id = [];
        $(x).map(function() {
          pawn_id.push(this.id);
        });
        if(x == '.bpawn' && $(x).length > 0){
          times1 = $(".bpawn").length;
          while(times1 > 0){
            move(x, pawn_id);
            times1 -= 1;
          }
        }
        else if(x != '.bking' && x != '.bqueen' && $(x).length > 0) {
          times1 = $(x).length;
          while(times1 > 0){
            move(x, pawn_id);
            times1 -= 1;
          }
        }
        else if($(x).length > 0) {
          move(x, pawn_id)
        }
      }
    }
    function move(x, pawn_id) {
      times = pawn_id.length - 1;
      if(x == '.bking') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;

        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.wking') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;

        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.bqueen') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;

        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.wqueen') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.bbishop') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.wbishop') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;

        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.brook') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;

        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');

      }
      else if(x == '.wrook') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        if($('.moveable').length > 0) {
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');
      }
      else if(x == '.bknight') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 21;
        if(i[0] == 'b'){
          d = 'w'
        }
        else if(i[0] == 'w'){
          d = 'b'
        }
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');
      }
      else if(x == '.wknight') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 21;
        if(i[0] == 'b'){
          d = 'w'
        }
        else if(i[0] == 'w'){
          d = 'b'
        }
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');
      }
      else if(x == '.bpawn') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(i[0] == 'b'){
          d = 'w';
        }
        else if(i[0] == 'w'){
          d = 'b';
        }
        a += 10;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          c = d + 'a' + a;
          c1 = d + 'a' + a;
          c2 = d + 'a' + a;
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          if(a-1 > 10 && a-1 < 89 && (a-1) % 10 != 9 && (a-1) % 10 != 0){
            c1 = d + 'a' + (a - 1);
          }
          if(a+1 > 10 && a+1 < 89 && (a+1) % 10 != 9 && (a+1) % 10 != 0){
            c2 = d + 'a' + (a + 1);
          }
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          f = document.getElementById(c);
          if(c1 != c){
            f1 = document.getElementById(c1);
          }
          if(c2 != c){
            f2 = document.getElementById(c2);
          }
          ret = true;
          ret1 = false;
          ret2 = false;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(f.getAttribute('class') == y || f.getAttribute('class') == y + ' moveable2'){
              ret = false;
            }
            if(f.getAttribute('class') == x || f.getAttribute('class') == x + ' moveable2'){
              ret = false;
            }
            if(c1 != c){
              if(x == f1.getAttribute('class')){
                ret1 = true;
              }
            }
            if(c2 != c){
              if(x == f2.getAttribute('class')){
                ret2 = true;
              }
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
          if(ret1){
            $(f1).addClass('moveable');
          }
          if(ret2){
            $(f2).addClass('moveable');
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2')
        }
        $('.moveable').removeClass('moveable');
      }
      else if(x == '.wpawn') {
        x = pawn_id[times];
        pawn_id.pop();
        xcopy = x;
        var i = x;
        var a = '';
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(i[0] == 'b'){
          d = 'w';
        }
        else if(i[0] == 'w'){
          d = 'b';
        }
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          a -= 10;
          c = d + 'a' + a;
          c1 = d + 'a' + a;
          c2 = d + 'a' + a;
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          if(a-1 > 10 && a-1 < 89 && (a-1) % 10 != 9 && (a-1) % 10 != 0){
            c1 = d + 'a' + (a - 1);
          }
          if(a+1 > 10 && a+1 < 89 && (a+1) % 10 != 9 && (a+1) % 10 != 0){
            c2 = d + 'a' + (a + 1);
          }
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          f = document.getElementById(c);
          if(c1 != c){
            f1 = document.getElementById(c1);
          }
          if(c2 != c){
            f2 = document.getElementById(c2);
          }
          ret = true;
          ret1 = false;
          ret2 = false;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(f.getAttribute('class') == y || f.getAttribute('class') == y + ' moveable2'){
              ret = false;
            }
            if(f.getAttribute('class') == x || f.getAttribute('class') == x + ' moveable2'){
              ret = false;
            }
            if(c1 != c){
              if(x == f1.getAttribute('class')){
                ret1 = true;
              }
            }
            if(c2 != c){
              if(x == f2.getAttribute('class')){
                ret2 = true;
              }
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
          if(ret1){
            $(f1).addClass('moveable');
          }
          if(ret2){
            $(f2).addClass('moveable');
          }
        }
        if($('.moveable').length > 0){
          $('#' + xcopy).addClass('moveable2');
        }
        $('.moveable').removeClass('moveable');
      }
    }
    function refresh() {
      location.replace('../chessGame');
    }
    if($('.bking').length < 1) {
      alert('WHITE WINS!!!!!!');
      refresh();
    }
    else if($('.wking').length < 1) {
      alert('BLACK WINS!!!!!!');
      refresh();
    }
    $('.bknight').on('click', function() {
      if(others && bturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        a += i[2];
        a += i[3];

        a = parseInt(a);
        a += 21;
        if(i[0] == 'b'){
          d = 'w'
        }
        else if(i[0] == 'w'){
          d = 'b'
        }
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in bClassList){ 
            x = bClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          add = true;
          $(b).removeClass('bknight');
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == 'wking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'wking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('bknight');
          }
          $('.moveable').off('click');
          $('.moveable').removeClass('moveable');
          others = true;
          bturn = false;
          wturn = true;
          run();
        });
      }
    });
    $('.bpawn').on('click', function() {
      if(others && bturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        a += i[2];
        a += i[3];
        a = parseInt(a)
        if(i[0] == 'b'){
          d = 'w'
        }
        else if(i[0] == 'w'){
          d = 'b'
        }
        if(a > 20 && a < 29 ){
          a += 10;
          var c = d + 'a' + a;
          c1 = d + 'a' + a;
          c2 = d + 'a' + a;
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          if(a-1 > 10 && a-1 < 89 && (a-1) % 10 != 9 && (a-1) % 10 != 0){
            c1 = d + 'a' + (a - 1);
          }
          if(a+1 > 10 && a+1 < 89 && (a+1) % 10 != 9 && (a+1) % 10 != 0){
            c2 = d + 'a' + (a + 1);
          }
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          f = document.getElementById(c);
          if(c1 != c){
            f1 = document.getElementById(c1);
          }
          if(c2 != c){
            f2 = document.getElementById(c2);
          }
          ret = true;
          ret1 = false;
          ret2 = false;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(f.getAttribute('class') == y || f.getAttribute('class') == y + ' moveable2'){
              ret = false;
            }
            if(f.getAttribute('class') == x || f.getAttribute('class') == x + ' moveable2'){
              ret = false;
            }
            if(c1 != c){
              if(x == f1.getAttribute('class')){
                ret1 = true;
              }
            }
            if(c2 != c){
              if(x == f2.getAttribute('class')){
                ret2 = true;
              }
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
          if(ret1){
            $(f1).addClass('moveable');
          }
          if(ret2){
            $(f2).addClass('moveable');
          }
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          a += 10;
          c = d + 'a' + a;
          f = document.getElementById(c);
          for(xi in bClassList){
            x = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              ret = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          a += 10;
          c = d + 'a' + a;
          c1 = d + 'a' + a;
          c2 = d + 'a' + a;
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          if(a-1 > 10 && a-1 < 89 && (a-1) % 10 != 9 && (a-1) % 10 != 0){
            c1 = d + 'a' + (a - 1);
          }
          if(a+1 > 10 && a+1 < 89 && (a+1) % 10 != 9 && (a+1) % 10 != 0){
            c2 = d + 'a' + (a + 1);
          }
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          f = document.getElementById(c);
          if(c1 != c){
            f1 = document.getElementById(c1);
          }
          if(c2 != c){
            f2 = document.getElementById(c2);
          }
          ret = true;
          ret1 = false;
          ret2 = false;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(f.getAttribute('class') == y || f.getAttribute('class') == y + ' moveable2'){
              ret = false;
            }
            if(f.getAttribute('class') == x || f.getAttribute('class') == x + ' moveable2'){
              ret = false;
            }
            if(c1 != c){
              if(x == f1.getAttribute('class')){
                ret1 = true;
              }
            }
            if(c2 != c){
              if(x == f2.getAttribute('class')){
                ret2 = true;
              }
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
          if(ret1){
            $(f1).addClass('moveable');
          }
          if(ret2){
            $(f2).addClass('moveable');
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('bpawn');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == 'wking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'wking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(a > 80 && a < 89 && add) {
            $(this).addClass('bqueen');
          }
          else if(add){
            $(this).addClass('bpawn');
          }
          $('.moveable').removeClass('moveable');
          others = true;
          bturn = false;
          wturn = true;
          run();
        });
      }
    });
    $('.brook').on('click', function() {
      if(others && bturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('brook');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          f = document.getElementsByClassName('bking')[0];
          if(a == '13' && f.getAttribute('id') == 'wa14'){
            mking = true;
          }
          else {
            mking = false;
          }
          add = true;
          for(xi in wClassList){
            x = wClassList[xi];
            if(x == 'wking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'wking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('brook');
          }
          $(this).addClass('brook');
          if(mking) {
            $('#wa12').addClass('bking');
            $('#wa14').removeClass('bking');
          }
          $('.moveable').removeClass('moveable');
          others = true;
          bturn = false;
          wturn = true;
          run();
        });
      }
    });
    $('.bbishop').on('click', function() {
      if(others && bturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('bbishop');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in wClassList){
            x = wClassList[xi];
            if(x == 'wking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'wking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('bbishop');
          }
          $(this).addClass('bbishop');
          $('.moveable').removeClass('moveable');
          others = true;
          bturn = false;
          wturn = true;
          run();
        });
      }
    });
    $('.bqueen').on('click', function() {
      if(others && bturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in bClassList){
              x = bClassList[xi];
              y = wClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('bqueen');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in wClassList){
            x = wClassList[xi];
            $(this).removeClass(x);
          }
          $(this).addClass('bqueen');
          $('.moveable').removeClass('moveable');
          others = true;
          bturn = false;
          wturn = true;
          run();
        });
      }
    });
    $('.bking').on('click', function() {
      if(others && bturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in bClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        $(this).addClass('moveable2');
        $('.moveable2').on('click', function() {
          $('.moveable').off('click');
          $('.moveable').removeClass('moveable');
          others = true;
          $('.moveable2').off('click');
          $('.moveable2').removeClass('moveable2');
          run();
        });
        $('.moveable').on('click', function() {
          $('.moveable2').off('click');
          $('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('bking');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in wClassList){
            x = wClassList[xi];
            $(this).removeClass(x);
          }
          $(this).addClass('bking');
          $('.moveable').removeClass('moveable');
          others = true;
          bturn = false;
          wturn = true;
          run();
        });
      }
    })
    $('.wknight').on('click', function() {
      if(others && wturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        a += i[2];
        a += i[3];

        a = parseInt(a);
        a += 21;
        if(i[0] == 'b'){
          d = 'w'
        }
        else if(i[0] == 'w'){
          d = 'b'
        }
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              
              ret = false;
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a - 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 2;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        a = a + 20;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0) {
          ret = true;
          for(xi in wClassList){ 
            x = wClassList[xi]
            if(x == document.getElementById(c).getAttribute('class')){
              ret = false;
              
            }
          }
          if(ret) {
            f = document.getElementById(c);
            $(f).addClass('moveable');
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('wknight');
          add = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == 'bking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'bking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('wknight');
          }
          $('.moveable').off('click');
          $(this).addClass('wknight');
          $('.moveable').removeClass('moveable');
          others = true;
          wturn = false;
          bturn = true;
          run();
        });
      }
    });
    $('.wpawn').on('click', function() {
      if(others && wturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        a += i[2];
        a += i[3];
        a = parseInt(a)
        if(i[0] == 'b'){
          d = 'w'
        }
        else if(i[0] == 'w'){
          d = 'b'
        }
        if(a > 70 && a < 79 ){
          a -= 10;
          var c = d + 'a' + a;
          c1 = d + 'a' + a;
          c2 = d + 'a' + a;
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          if(a-1 > 10 && a-1 < 89 && (a-1) % 10 != 9 && (a-1) % 10 != 0){
            c1 = d + 'a' + (a - 1);
          }
          if(a+1 > 10 && a+1 < 89 && (a+1) % 10 != 9 && (a+1) % 10 != 0){
            c2 = d + 'a' + (a + 1);
          }
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          f = document.getElementById(c);
          if(c1 != c){
            f1 = document.getElementById(c1);
          }
          if(c2 != c){
            f2 = document.getElementById(c2);
          }
          ret = true;
          ret1 = false;
          ret2 = false;
          for(xi in wClassList){
            x = bClassList[xi];
            y = wClassList[xi];
            if(f.getAttribute('class') == y || f.getAttribute('class') == y + ' moveable2'){
              ret = false;
            }
            if(f.getAttribute('class') == x || f.getAttribute('class') == x + ' moveable2'){
              ret = false;
            }
            if(c1 != c){
              if(x == f1.getAttribute('class')){
                ret1 = true;
              }
            }
            if(c2 != c){
              if(x == f2.getAttribute('class')){
                ret2 = true;
              }
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
          if(ret1){
            $(f1).addClass('moveable');
          }
          if(ret2){
            $(f2).addClass('moveable');
          }
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          a -= 10;
          c = d + 'a' + a;
          f = document.getElementById(c);
          for(xi in bClassList){
            x = wClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              ret = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          a -= 10;
          c = d + 'a' + a;
          c1 = d + 'a' + a;
          c2 = d + 'a' + a;
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          if(a-1 > 10 && a-1 < 89 && (a-1) % 10 != 9 && (a-1) % 10 != 0){
            c1 = d + 'a' + (a - 1);
          }
          if(a+1 > 10 && a+1 < 89 && (a+1) % 10 != 9 && (a+1) % 10 != 0){
            c2 = d + 'a' + (a + 1);
          }
          if(d == 'b'){
            d = 'w'
          }
          else if(d == 'w'){
            d = 'b'
          }
          f = document.getElementById(c);
          if(c1 != c){
            f1 = document.getElementById(c1);
          }
          if(c2 != c){
            f2 = document.getElementById(c2);
          }
          ret = true;
          ret1 = false;
          ret2 = false;
          for(xi in bClassList){
            x = bClassList[xi];
            if(f.getAttribute('class') == x || f.getAttribute('class') == x + ' moveable2'){
              ret = false;
            }
            if(c1 != c){
              if(x == f1.getAttribute('class')){
                ret1 = true;
              }
            }
            if(c2 != c){
              if(x == f2.getAttribute('class')){
                ret2 = true;
              }
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
          if(ret1){
            $(f1).addClass('moveable');
          }
          if(ret2){
            $(f2).addClass('moveable');
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('wpawn');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in bClassList){
            x = bClassList[xi]
            if(x == 'bking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'bking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(a > 10 && a < 19 && add) {
            $(this).addClass('wqueen');
          }
          else if(add){
            $(this).addClass('wpawn');
          }
          $('.moveable').removeClass('moveable');
          others = true;
          wturn = false;
          bturn = true;
          run();
        });
      }
    });
    $('.wrook').on('click', function() {
      if(others && wturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_wRook = true;
        while(rerun_wRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_wRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_wRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_wRook = false;
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('wrook');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          f = document.getElementsByClassName('wking')[0];
          if(a == '83' && f.getAttribute('id') == 'ba84'){
            mking = true;
          }
          else {
            mking = false;
          }
          if(mking) {
            $('#ba82').addClass('wking');
            $('#ba84').removeClass('wking');
          }
          for(xi in wClassList){
            x = bClassList[xi];
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('wrook');
          }
          $(this).addClass('wrook');
          $('.moveable').removeClass('moveable');
          others = true;
          wturn = false;
          bturn = true;
          run();
        });
      }
    });
    $('.wbishop').on('click', function() {
      if(others && wturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('wbishop');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in bClassList){
            x = bClassList[xi];
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('wbishop');
          }
          $(this).addClass('wbishop');
          $('.moveable').removeClass('moveable');
          others = true;
          wturn = false;
          bturn = true;
          run();
        });
      }
    });
    $('.wqueen').on('click', function() {
      if(others && wturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a += 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 10;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          if(d == 'b'){
            d = 'w';
          }
          else if(d == 'w'){
            d = 'b';
          }
          a -= 1;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a += 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 9;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        rerun_bRook = true;
        while(rerun_bRook){
          a -= 11;
          c = d + 'a' + a;
          if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
            f = document.getElementById(c);
            ret = true;
            for(xi in wClassList){
              x = wClassList[xi];
              y = bClassList[xi];
              if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
                rerun_bRook = false;
                ret = false;
              }
              else if(y == f.getAttribute('class')){
                rerun_bRook = false;
              }
            }
            if(ret){
              $(f).addClass('moveable');
            }
          }
          else {
            rerun_bRook = false;
          }
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('wqueen');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in bClassList){
            x = bClassList[xi];
            if(x == 'bking') {
              idd = this.id;
              f = document.getElementById(idd);
              if(f.getAttribute('class') == 'bking') {
                add = false;
              }
            }
            $(this).removeClass(x);
          }
          if(add){
            $(this).addClass('wqueen');
          }
          $(this).addClass('wqueen');
          $('.moveable').removeClass('moveable');
          others = true;
          wturn = false;
          bturn = true;
          run();
        });
      }
    });
    $('.wking').on('click', function() {
      if(others && wturn) {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
        others = false;
        $(this).off('click');
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a += 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 10;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        if(d == 'b'){
          d = 'w';
        }
        else if(d == 'w'){
          d = 'b';
        }
        a -= 1;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var i = this.id;
        var b = this;
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a += 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 9;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        var a = '';
        d = i[0];
        a += i[2];
        a += i[3];
        a = parseInt(a);
        a -= 11;
        c = d + 'a' + a;
        if(a > 10 && a < 89 && a % 10 != 9 && a % 10 != 0){
          f = document.getElementById(c);
          ret = true;
          for(xi in wClassList){
            x = wClassList[xi];
            y = bClassList[xi];
            if(x == f.getAttribute('class') || x + ' moveable2' == f.getAttribute('class')){
              rerun_bRook = false;
              ret = false;
            }
            else if(y == f.getAttribute('class')){
              rerun_bRook = false;
            }
          }
          if(ret){
            $(f).addClass('moveable');
          }
        }
        else {
          rerun_bRook = false;
        }
        $(this).addClass('moveable2');$('.moveable2').on('click', function() {$('.moveable').off('click');$('.moveable').removeClass('moveable');others = true;$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');run();});
        $('.moveable').on('click', function() {$('.moveable2').off('click');$('.moveable2').removeClass('moveable2');
          $(this).off('click');
          $(b).removeClass('wking');
          $('.moveable').off('click');
          a = '';
          i = this.id;
          a += i[2];
          a += i[3];
          add = true;
          for(xi in bClassList){
            x = bClassList[xi];
            $(this).removeClass(x);
          }
          $(this).addClass('wking');
          $('.moveable').removeClass('moveable');
          others = true;
          wturn = false;
          bturn = true;
          run();
        });
      }
    })
  }
  run();
});
