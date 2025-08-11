<template>
  <p>Sidee에서 함께할 팀원과 아이디어를 찾고 기록하며 성장하세요!</p>
  <button>시작하기</button>
</template>

<script>
export default {
  name: 'HomeSentence',
}
</script>

<style>
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

p {
  color: #2FBD8D;
  font-family: 'Pretendard-Regular';
  font-size: 30px;
}

button {
  color: white;
  border-radius: 20px;
  border: none;
  background-color: #2FBD8D;
  width: 197px;
  height: 74px;
  font-size: 20px;
  margin-top: 30px;
}
</style>