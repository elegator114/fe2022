function goMenu(pageId, highlightIdx, subHighlightIdx) {
  window.location.href = pageId;
  highlightGnb(highlightIdx, subHighlightIdx);
}

function highlightGnb(highlightIdx, subHighlightIdx) {
  $("#gnb_menu_list").find("li").removeClass("on");
  $("#gnb_sub_menu_list").find("li p").removeClass("on");

  if (highlightIdx != undefined) {
    $($("#gnb_menu_list").find("li").get(highlightIdx)).addClass("on");
    if (subHighlightIdx != undefined) {
      $(
        $($("#gnb_sub_menu_list").find("li").get(highlightIdx))
          .find("p")
          .get(subHighlightIdx)
      ).addClass("on");
    }
  }
}

function post(url, param, callback, errcallback, notloading) {
  if (!notloading) {
  }
  $.post(
    url,
    param,
    function (data, textStatus, jqXHR) {
      if (!notloading) {
      }

      if (callback && callback != null) {
        callback.call(null, data);
      }
    },
    "json"
  ).fail(function (jqXHR) {
    if (!notloading) {
    }
    var data;
    try {
      data = JSON.parse(jqXHR.responseText);
      if (!data) {
        data = { error: msg_jsp_error };
      }
      chkErr4Ajax(data, errcallback);
    } catch (e) {
      if (jqXHR.responseText.indexOf("<!DOCTYPE") >= 0) {
        //TOC.util.alert(msg_jsp_error);
      } else {
        if (jqXHR.status == 200) {
          if (callback && callback != null) {
            callback.call(null, data);
          }
        }
      }
    }

    if (jqXHR.status == 701) {
      //location.href="/";
    }
  });
}

function chkErr4Ajax(data, errcallback) {
  //
  if (data.RES_CODE) {
    if (errcallback && errcallback != null) {
      errcallback.call(null, data);
    } else {
      //toast(data.RES_MSG);
    }
    return true;
  }
  return false;
}

function parseDate(times, delemeter) {
  var d = new Date(times);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (date < 10) {
    date = "0" + date;
  }
  delemeter = delemeter ? delemeter : ". ";
  return year + delemeter + month + delemeter + date;
}

function resizeIframe(obj) {
  var height = Number(obj.contentWindow.document.body.scrollHeight) + 120;
  obj.style.height = height + "px";
  $(obj).parent().height(height);
  //$(obj).parent().height('auto');
}
