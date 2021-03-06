export const AppData = JSON.parse(
  '{"RateratorSchemaVersion":1, "Schools":[{"Name":"Calgary College Of The Arts","SchoolSid":"CCARTS"}, {"Name":"Bow Ridge College","SchoolSid":"BOWRID"}, {"Name":"Calgary Coding Bootcamp","SchoolSid":"CCBOOT"}, {"Name":"Alberta Machine Learning Institute","SchoolSid":"AMLINS"}, {"Name":"JavaScript Judo Academy","SchoolSid":"JJACAD"}], "Instructors":[{"Instructor":"Sidney Thompson","InstructorSid":"SIDTHO"}, {"Instructor":"Stephanie Chan","InstructorSid":"STECHA"}, {"Instructor":"Emma Jones","InstructorSid":"EMMJON"}, {"Instructor":"Peter Van Gogh","InstructorSid":"PETVAN"}, {"Instructor":"T.G. Best","InstructorSid":"TGBEST"},{"Instructor":"Sean Harrison","InstructorSid":"SEAHAR"}, {"Instructor":"Riley Robertson","InstructorSid":"RILROB"}], "Likes":[{"InstructorSid":"SIDTHO","Likes":45}, {"InstructorSid":"STECHA","Likes":90}, {"InstructorSid":"EMMJON","Likes":102},{"InstructorSid":"PETVAN","Likes":85},{"InstructorSid":"TGBEST","Likes":385}, {"InstructorSid":"SEAHAR","Likes":35}, {"InstructorSid":"RILROB","Likes":225}], "Ratings":[{"InstructorSid":"SIDTHO","SchoolSid":"CCARTS","Rating":3.5,"Username":"codeninja","SubmittedOnUtc":"2016-03-01T07:00:00.000Z"}, {"InstructorSid":"SIDTHO","SchoolSid":"CCARTS","Rating":2.5,"Username":"aiaiai","SubmittedOnUtc":"2018-02-14T07:00:00.000Z"}, {"InstructorSid":"EMMJON","SchoolSid":"BOWRID","Rating":3.95,"Username":"igetwhatclosuresare","SubmittedOnUtc":"2018-06-12T06:00:00.000Z"}, {"InstructorSid":"SIDTHO","SchoolSid":"CCARTS","Rating":2.1,"Username":"superdev","SubmittedOnUtc":"2018-05-16T06:00:00.000Z"},{"InstructorSid":"EMMJON","SchoolSid":"BOWRID","Rating":4.25,"Username":"superdev","SubmittedOnUtc":"2018-07-15T06:00:00.000Z"}, {"InstructorSid":"PETVAN","SchoolSid":"CCARTS","Rating":3.1,"Username":"iotrocker","SubmittedOnUtc":"2018-05-02T06:00:00.000Z"}, {"InstructorSid":"RILROB","SchoolSid":"BOWRID","Rating":5,"Username":"sharpc","SubmittedOnUtc":"2018-12-02T07:00:00.000Z"}, {"InstructorSid":"PETVAN","SchoolSid":"CCARTS","Rating":3.8,"Username":"dbjedi","SubmittedOnUtc":"2018-11-12T07:00:00.000Z"}, {"InstructorSid":"RILROB","SchoolSid":"BOWRID","Rating":5,"Username":"dreamsincode","SubmittedOnUtc":"2017-09-24T06:00:00.000Z"}]}'
);

export function aggregateData() {
  let sums = {},
    counts = {},
    RateAggs = [];
  let InstructorSid = {};

  for (let i = 0; i < AppData.Ratings.length; i++) {
    InstructorSid = AppData.Ratings[i].InstructorSid;

    if (!(InstructorSid in sums)) {
      sums[InstructorSid] = 0;
      counts[InstructorSid] = 0;
    }
    sums[InstructorSid] += AppData.Ratings[i].Rating;
    counts[InstructorSid]++;
  }
  for (InstructorSid in sums) {
    RateAggs.push({
      InstructorSid: InstructorSid,

      Rating: Math.floor(sums[InstructorSid] / counts[InstructorSid])
    });
  }
  return RateAggs;
}
export function LikesCount() {
  const Likes = AppData.Likes.map(item => item.Likes);
  return Likes;
}
