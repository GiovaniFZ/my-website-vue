<script setup>
import { ref } from 'vue';

const isClosed = ref(false);
const isMinimized = ref(false);
const windowPosition = ref({ x: 0, y: 0 });
const isDragging = ref(false);
let dragStart = { x: 0, y: 0 };
let positionAtDragStart = { x: 0, y: 0 };

function closeWindow() {
  isClosed.value = true;
}

function toggleMinimize() {
  isMinimized.value = !isMinimized.value;
}

function startDrag(event) {
  if (event.button !== undefined && event.button !== 0) return;

  dragStart = { x: event.clientX, y: event.clientY };
  positionAtDragStart = { ...windowPosition.value };
  isDragging.value = true;
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function dragWindow(event) {
  if (!isDragging.value) return;

  windowPosition.value = {
    x: positionAtDragStart.x + event.clientX - dragStart.x,
    y: positionAtDragStart.y + event.clientY - dragStart.y
  };
}

function stopDrag(event) {
  if (!isDragging.value) return;

  isDragging.value = false;
  event.currentTarget.releasePointerCapture?.(event.pointerId);
}

defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  image: String,
  iconName: String,
  isFirst: Boolean,
  hasImage: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div
    v-if="!isClosed"
    class="wrapper"
    :class="{ 'is-dragging': isDragging }"
    :style="{ transform: `translate(${windowPosition.x}px, ${windowPosition.y}px)` }"
  >
    <div class="container">
        <div
          class="window-titlebar"
          :class="{ 'is-dragging': isDragging }"
          @pointerdown="startDrag"
          @pointermove="dragWindow"
          @pointerup="stopDrag"
          @pointercancel="stopDrag"
        >
          <div class="window-dots">
            <button class="dot dot-red" type="button" aria-label="Fechar janela" title="Fechar" @pointerdown.stop @click="closeWindow">
              <span aria-hidden="true">&times;</span>
            </button>
            <button
              class="dot dot-yellow"
              type="button"
              :aria-label="isMinimized ? 'Restaurar janela' : 'Minimizar janela'"
              :title="isMinimized ? 'Restaurar' : 'Minimizar'"
              :aria-expanded="!isMinimized"
              @pointerdown.stop
              @click="toggleMinimize"
            >
              <span aria-hidden="true">&minus;</span>
            </button>
            <button class="dot dot-green" type="button" aria-label="Expandir janela" title="Expandir" disabled @pointerdown.stop>
              <span aria-hidden="true">+</span>
            </button>
        </div>
        <span class="window-title">~/{{subtitle.toLowerCase().replace(" ", "_")}}.md — zsh</span>
      </div>
      <div v-if="!isMinimized" class="window-content">
        <div class="same-line">
        <img v-if="hasImage && image" :src="image" alt="Section icon" />
        <v-icon scale="7" v-else :name="iconName" aria-hidden="true" />
        <div v-if="subtitle" class="hero-title">
          <span v-if="title" class="greeting">{{ title }}</span>
          <span class="hero-name">{{ subtitle }}</span>
        </div>
        <h1 v-else>{{ title }}</h1>
        </div>
        <div class="slot-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes colors {
  0% {
    background-color: #13645e;
  }

  100% {
    background-color: #0f5a57;
  }
}

@keyframes goToTop {
  0% {
    transform: translateY(12px);
    opacity: 0;
    filter: blur(2px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
    filter: blur(0);
  }
}

.window-titlebar {
    display: flex;
    align-items: center;
    padding: 14px 18px;
    background: rgba(0,0,0,0.3);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    gap: 10px;
    touch-action: none;
  }

.wrapper {    
    background: var(--bg-window);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
    transition: transform 0.4s, box-shadow 0.4s;
    margin: 5rem 0.75rem 6rem 0.75rem;
}

.wrapper.is-dragging {
  transition: none;
}
.container {
  margin: 0 auto;
}

  .window-dots {
    display: flex;
    gap: 6px;
  }

  .dot {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 0.75rem;
    line-height: 1;
    cursor: default;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: transform 0.2s;
  }

  .dot span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 1.2;
  }

  .dot-red { background: #ff5f57; }
  .dot-yellow { background: #febc2e; }
  .dot-green { background: #28c840; }

  .dot:hover {
    transform: scale(1.2);
  }


.same-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 870px) {
    flex-direction: column;
  }

  .title-container,
  h1 {
    text-align: left;
  }

}

.greeting {
  font-size: 2.5rem;
  line-height: 1.05;

  @media(max-width: 870px) {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
}

.hero-title {
    font-size: clamp(32px, 8vw, 120px);
    font-weight: 800;
    line-height: 1.12;
    background: linear-gradient(135deg, #fff 0%, #a5b5b5 50%, #3aedc3 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: title-shine 8s ease-in-out infinite;
    background-size: 150% 150%;
    overflow-wrap: anywhere;
  }

.hero-name {
    display: block;
    background: linear-gradient(90deg, var(--accent-2), var(--accent-3));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 300% 100%;
    animation: name-flow 6s linear infinite;
  }

.slot-content {
  display: block;
  margin-top: 2rem;
  width: 100%;
}

:slotted(.mySwiper),
:slotted(.swiper) {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

:slotted(p) {
  font-size: 2rem;
  text-align: center;
  animation: goToTop 550ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media(max-width: 870px) {
    font-size: 1rem;
    margin: 0.5rem;
  }
}

img {
  width: 17%;
  height: 17%;
  border-radius: 50%;
  animation: goToTop 650ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media(max-width: 870px) {
    margin-top: 1rem;
    width: 40%;
    height: 40%;
  }
}

v-icon {
  animation: goToTop 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@media (prefers-reduced-motion: reduce) {

  .wrapper,
  h1,
  img,
  v-icon,
  :slotted(p) {
    animation: none !important;
  }
}

@media (max-width: 870px) {
  .same-line>v-icon {
    font-size: 4em !important;
  }
}
</style>
