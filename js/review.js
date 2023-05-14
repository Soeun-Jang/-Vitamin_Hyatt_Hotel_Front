// document.addEventListener("DOMContentLoaded", function () {
//   const submitBtn = document.getElementById("submitBtn");
//   submitBtn.addEventListener("click", getReviews);
// })

async function getReviews() {
  console.log("테스트")
  params = new URLSearchParams(window.location.search)
  room_id = params.get('room_id')
  console.log(room_id)
  // const room_id = event.target.dataset.userid;
  // const data = {
  //   "room_id": room_id
  // };
  // console.log(data)
  const response = await fetch(`${backend_base_url}users/myreservation/1/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("access")
    },
    method: 'GET',
  });
  //해당 숙소 리뷰 조회
  const response_json = await response.json()
  $('#detailroom-info').empty()
  console.log(response_json)
  const name = response_json['name']
  const description = response_json['description']
  const price = response_json['price']
  const max_members = response_json['max_members']

  let temp_html = `
                      <h3>${name}</h3>
                      <p class="content">설명 : ${description}</p>
                      <p class="content">가격 : ${price}</p>
                      <p class="content">인원 : ${max_members}</p>`
  $('#detailroom-info').append(temp_html)


  if (response.status == 200) {
    const response_json = await response.json()
    return response_json
  } else {
    alert("불러오는데 실패했습니다!")
  }
}

getReviews();
