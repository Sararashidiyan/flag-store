<template>
    <div class="flex justify-around">
      <img class="h-10 w-10 rounded-full" :src="country.flags.png" alt="country.flags.alt" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ country.name.common }}</p>
      </div>
      <button @click="onCardClick()" class="text-blue-500 hover:text-blue-600 p-2 rounded-full" 
                    style="background: rgba(0,0,0,0.3)">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                    </button>
    </div>
</template>
<script setup>
import { useFavoriteFlagStore } from '../stores/store'
const {isInFav,addToFav,removeFromFav} = useFavoriteFlagStore()
const props =defineProps({
    country: {
        type: Object
      }
    })
    const isSelected = computed(() => {
    return isInFav(props.country)
})
    const onCardClick = () => {
      debugger;
    if (isSelected.value) {
        debugger;
        removeFromFav(props.country)
    } else {
        addToFav(props.country)
    }

}
</script>
