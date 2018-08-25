<template>
    <div class="skills">
        <p class="skills__name">{{name}}</p>
        <div class="skills__container">
            <div class="skills__skill" :style="{width: Width + '%'}">
                <span :style="{opacity: opacity}" class="progress-number-wrapper">
                    <span class="progress-number-mark">
                        <span class="percent">{{Width}}%</span>
                        <span class="down-arrow"></span>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Width: 0,
            }
        },
        props: {
            width:{type: Number, required: true},
            name:{type: String, required: true},
            delay: {type: Number, required: false}
            },
        methods: {
            init() {
                let counter = setInterval(() => {
                    if(this.Width < this.width) {
                        this.Width += 1;
                    } else {
                        clearInterval(counter);
                    }
                }, 25);
            }
        },
        computed: {
            calcDelay() {
                if(this.delay) {
                    return this.delay;
                } else {
                    return 1000;
                }
            },
            opacity() {
                if(this.Width === this.width) {
                    return 1;
                } else {
                    return this.Width / 100;
                }
            }
        },
        mounted() {
            setTimeout(()=>{this.init();},this.calcDelay);
        }
    }
</script>

<style scoped lang="scss">
    .skills {
        width: 100%;
        &__container {
            background-color: #ebebeb;
            padding: 4px 3px;
        }
        &__name {
            margin-bottom: 1.7rem;
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 10px;
            color: #2f302f;
        }
        &__skill {
            position: relative;
            height: 2px;
            background-color: #a1a1a1;
            transition: width;
            &::after {
                position: absolute;
                top: 50%;
                left: 100%;
                transform: translateY(-50%);
                content: '';
                display: inline-block;
                width: 4px;
                height: 4px;
                background-color: #ffffff;
                border: 4px solid black;
                border-radius: 50%;
            }
        }
        .progress-number-mark {
            margin-bottom: 4px;
            background-color: #041608;
            padding: 0 8px;
            position: absolute;
            bottom: 10px;
            right: -26px;
        }

        .progress-number-wrapper,
        .progress-number-mark {
            font-size: 12px;
            line-height: 24px;
            height: 24px;
            letter-spacing: 0;
            font-weight: 400;
            font-style: normal;
            text-transform: none;
            color: #ffffff;
        }

        .down-arrow {
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 3px solid #16171d;
            position: absolute;
            left: 50%;
            top: 100%;
            -moz-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
        }
    }
</style>