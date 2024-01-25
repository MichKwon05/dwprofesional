<template>
    <div class="custom-loader"></div>
</template>

<style>
.custom-loader {
    width: 60px;
    height: 25px;
    border: 2px solid #766DF4;
    border-radius: 50%;
    display: grid;
    animation: h2 2s infinite linear;
}

.custom-loader:before,
.custom-loader:after {
    content: "";
    grid-area: 1/1;
    border: inherit;
    border-radius: 50%;
    animation: inherit;
    animation-duration: 3s;
}

.custom-loader:after {
    --s: -1;
}

@keyframes h2 {
    100% {
        transform: rotate(calc(var(--s, 1)*1turn))
    }
}
</style>

<script>
</script>