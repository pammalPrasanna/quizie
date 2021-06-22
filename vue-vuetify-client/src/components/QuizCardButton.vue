<template>
<v-btn
    class="mx-2 text-capitalize"
    :x-small = "btype.icon ? true : false"
    :fab = "btype.icon ? true : false"
    outlined 
    small
    color="green darken-1"
    :to="btype.link"
    >
    <template v-if="btype.icon">
    <v-icon>{{btype.icon}}</v-icon>
    </template>
    <template v-if="btype.label">
        {{btype.label}}
    </template>   
</v-btn>
</template>
<script>
export default {
    props: {
        btype: {
            type: Object,
            required: true,
        }
    },
    data: () => ({

    })
}
</script>