<template>
  <div style="margin: 15px">
    <div class="cxcalendar cxcalendar_holyday" style="display: block;" v-for="(result, id) in results">
      <div class="cxcalendar_hd">
        <div class="intxt">{{result[20].Month}}月</div>
        <div class="inset" style="display: none;"></div>
      </div>
      <div class="cxcalendar_bd">
        <ul class="week">
          <li class="sun">日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li class="sat">六</li>
        </ul>
        <ul class="days">
          <li v-for="(item, key) in result" v-bind:class="{ holiday: item.IsHoliday, other: item.InTerm, sat:isWeekEnd(item.DayOfWeek),  hid: isNoNowMonth(item.DayOfMonth) }"
              :title="item.Info" :data-year="item.Year" :data-month="item.Month" :data-day="item.DayOfMonth" @click="changeDay(key, id)">{{item.DayOfMonth}}
          </li>
          </li>

        </ul>
      </div>
      <div class="cxcalendar_ft" style="display: none;">
        <div class="inday">2018-1-4</div>
        <div class="intime"><input type="text" class="hour" maxlength="2"><i>:</i><input type="text" class="mint"
                                                                                         maxlength="2"><i>:</i><input
          type="text" class="secs" maxlength="2"></div>
        <a class="confirm" href="javascript://" rel="confirm"></a></div>
    </div>
    <el-dialog title="设置假期" v-model="dialogFormVisible">
      <el-form >
        <el-form-item label="备注" >
          <el-input auto-complete="off" v-model="info"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="del">删 除</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>


</template>

<script type="text/ecmascript-6">
  export default{
    props:['date'],
    data: function () {
      return {
        results: [],
        dialogFormVisible: false,
        nowDay: "",
        nowID: 0,
        nowRID: 0,
        info: ""
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        console.log(this.date.data)
        this.results=this.date.data;
      })
    },
    methods: {
      getdata: function () {
//				 console.log(this.formStacked.password)
//				console.log(this.formStacked.username)

      },
      isNoNowMonth: function (i) {
        if(i==-1){
          return true;
        }else{
          return false;
        }
      },
      isWeekEnd: function (i) {
        if(i==0||i==6){
          return true
        }else{
          return false
        }
      },
      changeDay: function (i,j) {
        this.dialogFormVisible = true;
        this.nowID = i;
        this.nowRID = j;
        this.nowDay = this.results[j][i].DateOfDay;
        this.info = this.results[j][i].Info;
      },
      submit: function () {
        this.dialogFormVisible = false;
        this.results[this.nowRID][this.nowID].Info = this.info;
        this.results[this.nowRID][this.nowID].IsHoliday = true;
      },
      del: function () {
        this.dialogFormVisible = false;
        this.results[this.nowRID][this.nowID].Info = this.info;
        this.results[this.nowRID][this.nowID].IsHoliday = false;
      }


    }

  }
</script>
<style>
  .cxcalendar{display:none;float:left;width:220px;padding:8px 0;border:1px solid #ccd1d9;border-radius:3px;background:#fff;box-shadow:1px 2px 3px rgba(0,0,0,0.2);color:#434a54;font-size:12px;z-index:100;}
  .cxcalendar_hd{position:relative;padding:0;background:#fff;}

  /* ä¸Šä¸‹æœˆåˆ‡æ¢æŒ‰é’® */
  .cxcalendar_hd .prev,
  .cxcalendar_hd .next{position:absolute;top:0;width:22px;height:22px;padding:0;border:1px solid transparent;border-radius:2px;color:#333;font:0/0 Arial;text-decoration:none;outline:0;}
  .cxcalendar_hd .prev{right:50%;margin-right:70px;}
  .cxcalendar_hd .next{left:50%;margin-left:70px;}
  .cxcalendar_hd .prev:before,
  .cxcalendar_hd .next:before{content:'';position:absolute;top:50%;left:50%;width:0;height:0;margin:-5px 0 0 -4px;border-top:5px solid transparent;border-bottom:5px solid transparent;font:0/0 Arial;}
  .cxcalendar_hd .prev:before{border-right:9px solid #333;}
  .cxcalendar_hd .next:before{border-left:9px solid #333;}

  /* å¹´æœˆæ–‡æœ¬ */
  .cxcalendar_hd .intxt{width:130px;margin:0 auto;border:1px solid #fff;border-radius:3px;font-weight:bold;font-size:14px;line-height:22px;text-align:center;cursor:pointer;}
  .cxcalendar_hd .intxt .y:after{content:'å¹´';margin:0 0.5em;}
  .cxcalendar_hd .intxt .m:after{content:'æœˆ';margin-left:0.5em;}

  .cxcalendar_hd .prev:hover,
  .cxcalendar_hd .next:hover,
  .cxcalendar_hd .intxt:hover{border:1px solid #aab2bd;background:#e6e9ed;}

  /* å¹´æœˆé€‰æ¡† */
  .cxcalendar_hd .inset{display:none;width:130px;margin:0 auto;text-align:center;}
  .cxcalendar_hd .inset .year,
  .cxcalendar_hd .inset .month{box-sizing:border-box;height:24px;margin:0;padding:0;border:1px solid #aab2bd;border-radius:3px;background:#fff;font-size:14px;line-height:24px;}
  .cxcalendar_hd .inset .month{margin-left:10px;}

  /* æ—¥æœŸ */
  .cxcalendar_bd{position:relative;font-size:12px;line-height:24px;text-align:center;z-index:1;
    *line-height:28px;
  }
  .cxcalendar_bd ul{overflow:hidden;margin:0;padding:0;list-style:none;}
  .cxcalendar_bd ul li{box-sizing:border-box;float:left;width:14%;height:28px;margin:0;padding:0;border:2px solid #fff;border-radius:5px;
    *border:none;
  }
  .cxcalendar_bd ul button{box-sizing:border-box;float:left;width:14%;height:28px;margin:0;padding:0;border:2px solid #fff;border-radius:5px;
    *border:none;
  }
  .cxcalendar_bd ul li:nth-child(7n+1){margin-left:1%;}
  .cxcalendar_bd ul button:nth-child(7n+1){margin-left:1%;}
  /* æ—¥æœŸæ ‡é¢˜ */
  .cxcalendar_bd .week{color:#aab2bd;}

  /* æ—¥æœŸåˆ—è¡¨ */
  .cxcalendar_bd .days{color:#656d78;}
  .cxcalendar_bd .days button{cursor:pointer;}
  .cxcalendar_bd .days button:hover{background:#e6e9ed;}
  .cxcalendar_bd .days li{cursor:pointer;}
  .cxcalendar_bd .days li:hover{background:#e6e9ed;}
  .cxcalendar_bd .days .sat{color:#4a89dc}
  .cxcalendar_bd .days .sun{color:#da4453;}
  .cxcalendar_bd .days .now{background:#e6e9ed;}
  .cxcalendar_bd .days .holiday{color:#da4453;}
  .cxcalendar_bd .days .other{color:#ccd1d9;}
  .cxcalendar_bd .days .hid{visibility:hidden;}
  .cxcalendar_bd .days .vis{visibility:visible;}
  .cxcalendar_bd .days .del{color:#ccd1d9;text-decoration:line-through;cursor:default;}
  .cxcalendar_bd .days .selected,
  .cxcalendar_bd .days .selected:hover{background:#8cc152;color:#fff;}

  /* æ—¶é—´ */
  .cxcalendar_ft{overflow:hidden;position:relative;margin-top:4px;padding:6px 4px 0;border-top:1px solid #ddd;}
  .cxcalendar_ft .inday{float:left;width:6em;height:22px;border-top:1px solid #fff;border-bottom:1px solid #ddd;color:#aab2bd;line-height:22px;text-align:center;}
  .cxcalendar_ft .inday:empty:before{content:'è¯·é€‰æ‹©æ—¥æœŸ';}

  .cxcalendar_ft .intime{float:left;margin-left:0.5em;line-height:22px;}
  .cxcalendar_ft .intime i{font-style:normal;}
  .cxcalendar_ft .intime .hour,
  .cxcalendar_ft .intime .mint,
  .cxcalendar_ft .intime .secs{width:2em;height:22px;margin:0;padding:0;border:none;border-top:1px solid #fff;border-bottom:1px solid #ddd;background:none;color:#656d78;line-height:24px;text-align:center;outline:none;}

  .cxcalendar_ft .confirm{float:right;height:24px;padding:0 0.5em;border-radius:3px;background-color:#4a89dc;color:#fff;line-height:24px;text-decoration:none;}
  .cxcalendar_ft .confirm:before{content:'ç¡®å®š';}

  /* èƒŒæ™¯é®ç½©å±‚ */
  .cxcalendar_lock{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:9999;filter:alpha(opacity=0);opacity:0;}


  /* ä¸æ˜¾ç¤ºç§’è¾“å…¥æ¡† */
  .cxcalendar_notsecs .cxcalendar_ft .intime .mint + i,
  .cxcalendar_notsecs .cxcalendar_ft .intime .secs{display:none;}

  /* è‹±æ–‡ */
  .cxcalendar_en .cxcalendar_hd .intxt .y:after{content:'-';margin:0 6px;}
  .cxcalendar_en .cxcalendar_hd .intxt .m:after{display:none;content:'';}

  /* èŠ‚å‡æ—¥ */
  .cxcalendar_holyday{width:460px;margin-left: 13%;  margin-top: 50px}
  .cxcalendar_holyday .cxcalendar_bd{font-size:20px;line-height:56px;}
  .cxcalendar_holyday .cxcalendar_bd ul li{height:60px;}
  .cxcalendar_holyday .cxcalendar_bd ul button{height:60px;}
  .cxcalendar_holyday .cxcalendar_bd .days .holiday{position:relative;}
  .cxcalendar_holyday .cxcalendar_bd .days .holiday:before{content:attr(title);position:absolute;top:50%;left:0;overflow:hidden;width:100%;margin-top:12px;font-size:12px;line-height:1;text-align:center;white-space:nowrap;text-overflow:ellipsis;}


</style>
