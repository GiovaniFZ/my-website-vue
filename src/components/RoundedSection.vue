<template>
  <div class="wrapper">
    <div class="same-line">
      <img src="https://github.com/GiovaniFZ.png" alt="Giovani's Github photo">
      <h1>About me</h1>
    </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis modi dolores voluptatem, minima quia nostrum voluptate consequatur sint. Id cum obcaecati enim voluptates nemo voluptatem saepe doloremque animi alias nam.</p>
  </div>
</template>

<style>
.wrapper {
  display: block;
  background-color: #e9f5f3;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
}

.same-line {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 2rem;
}

p {
  align-items: center;
  justify-content: center;
  display: flex;
}

img {
  width: 5%;
  height: 5%;
  border-radius: 50%;
}
</style>