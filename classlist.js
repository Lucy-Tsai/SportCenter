$(document).ready(function() {
  // 填入課程名稱和時間段
  var courses = [
      { courseName: "課程A", day: 1, startTime: 6, endTime: 7 },
      { courseName: "課程B", day: 3, startTime: 7, endTime: 8 },
      { courseName: "課程C", day: 2, startTime: 9, endTime: 10 },
      { courseName: "課程D", day: 2, startTime: 9, endTime: 10 },

      // 在此添加更多課程
  ];

  // 這裡的24表示課表範圍是從早上6點到晚上10點
  var scheduleHours = 16;

  // 動態生成課表內容
  for (var hour = 0; hour < scheduleHours; hour++) {
      var timeSlot = hour + 6; // 將0-23的數字轉換成6-22的時間
      var timeSlotLabel = timeSlot + ":00-" + (timeSlot + 1) + ":00";

      var row = $("<tr></tr>");

      // 添加時間標籤
      var timeCell = $("<td></td>").text(timeSlotLabel);
      row.append(timeCell);

      // 添加星期一到星期日的欄位
      for (var day = 1; day <= 7; day++) {
          var dayCell = $("<td></td>");

          // 尋找是否有課程符合該時間段和星期
          var matchingCourse = courses.find(function(course) {
              return course.day === day && course.startTime <= timeSlot && course.endTime > timeSlot;
          });

          // 如果找到課程，填入課程名稱
          if (matchingCourse) {
              dayCell.text(matchingCourse.courseName);
          }

          row.append(dayCell);
      }

      // 將這一行添加到表格的tbody中
      $("#scheduleTable tbody").append(row);
  }
});