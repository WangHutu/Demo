<template>
    <div>
        <module-header></module-header>
        <module-content></module-content>
    </div>
</template>

<script>
import moduleHeader from './moduleHeader'
import moduleContent from './moduleContent'

export default {
    name:'module',
    components:{
        moduleHeader,
        moduleContent
    }
}
</script>

<style>

</style>

