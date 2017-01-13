<template>
  <div>
    <my-date :date="dataA"></my-date>
  </div>
</template>
<script type="text/ecmascript-6">
  import myDate from '../components/vue-date.vue';

  export default{
    components:{
      'my-date':myDate
    },
    data: function () {
      return {
        "dataA": {
          "errorCode": "1",
          "data": [[
            {
              "TermID": 2,
              "DayOfMonth": 1,
              "DayOfWeek": 0,
              "IsHoliday": true,
              "DateOfDay": "2017/1/1 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "节日",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 2,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/2 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 3,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/3 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 4,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/4 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 5,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/5 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 6,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/6 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 7,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/7 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 8,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/8 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 9,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/9 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 10,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/10 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 11,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/11 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 12,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/12 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 13,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/13 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 14,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/14 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 15,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/15 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 16,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/16 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 17,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/17 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 18,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/18 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 19,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/19 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 20,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/20 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 21,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/21 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 22,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/22 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 23,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/23 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 24,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/24 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 25,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/25 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 26,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/26 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 27,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/27 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 28,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/28 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 29,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/29 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 30,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/30 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 31,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/31 0:00:00",
              "Month": 1,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            }
          ],[
            {
              "TermID": 2,
              "DayOfMonth": 1,
              "DayOfWeek": 0,
              "IsHoliday": true,
              "DateOfDay": "2017/1/1 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "节日",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 2,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/2 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 3,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/3 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 4,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/4 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 5,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/5 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 6,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/6 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 7,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/7 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 8,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/8 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 9,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/9 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 10,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/10 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 11,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/11 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 12,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/12 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 13,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/13 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 14,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/14 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 15,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/15 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 16,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/16 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 17,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/17 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 18,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/18 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 19,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/19 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 20,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/20 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 21,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/21 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 22,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/22 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 23,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/23 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 24,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/24 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 25,
              "DayOfWeek": 3,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/25 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 26,
              "DayOfWeek": 4,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/26 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 27,
              "DayOfWeek": 5,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/27 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 28,
              "DayOfWeek": 6,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/28 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 29,
              "DayOfWeek": 0,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/29 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": 30,
              "DayOfWeek": 1,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/30 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": 31,
              "DayOfWeek": 2,
              "IsHoliday": 0,
              "DateOfDay": "2017/1/31 0:00:00",
              "Month": 2,
              "Year": 2017,
              "Info": "",
              "InTerm": true
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            },
            {
              "TermID": 2,
              "DayOfMonth": -1,
              "DayOfWeek": -1,
              "IsHoliday": 0,
              "DateOfDay": "2050/1/1 0:00:00",
              "Month": -1,
              "Year": -1,
              "Info": "",
              "InTerm": false
            }
          ]]
        }
    }
  }
  }
</script>
