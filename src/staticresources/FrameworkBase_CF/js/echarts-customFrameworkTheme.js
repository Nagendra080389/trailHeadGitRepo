/**************************************************************************************
 * Create by:   Deloitte Consulting LLP.
 * CreateDate:  03/18/2016
 * Description: Custom Theme for echarts.
 *
 *  Modification Log:
 *  ------------------------------------------------------------------------------
 *  * Version       Date         Author                Description
 *  * ----------------------------------------------------------------------------
 *  * 1.0           03/18/2016     Alejandro Cajica    Initial Version.
 **************************************************************************************/
var objMark = {
    mark: {
        show: true,
        title: {
            mark: 'Auxiliary Line Switch',
            markUndo: 'Remove Auxiliary Line',
            markClear: 'Empty guides'
        },
        lineStyle: {
            width: 2,
            color: '#1e90ff',
            type: 'dashed'
        }
    }
};
var objDataZoom = {
    dataZoom: {
        show: true,
        title: {
            dataZoom: 'Zoom Area',
            dataZoomReset: 'Zoom Area Back'
        }
    }
};
var objDataView = {
    dataView: {
        show: true,
        title: 'View',
        readOnly: false,
        lang: ['data view', 'turn off', 'refresh'],
    }
};
var objMagicType = {
    magicType: {
        show: true,
        title: {
            line: 'Line Chart Switch',
            bar: 'Column Chart Switch',
            stack: 'Bulk',
            tiled: 'Tile',
            force: 'Force-directed Layout Switching',
            chord: 'Chord Chart handover',
            pie: 'Pie Switch',
            funnel: 'Funnel Plot Handover'
        },
        option: {
            // line: {...},
            // bar: {...},
            // stack: {...},
            // tiled: {...},
            // force: {...},
            // chord: {...},
            // pie: {...},
            // funnel: {...}
        },
        type: []
    }
};
var objRestore = {
    restore: {
        show: true,
        title: 'Restore'
    }
};
var objSaveAsImage = {
    saveAsImage: {
        show: true,
        title: 'Save as image',
        type: 'png',
        lang: ['Click Save']
    }
};
var objFullFeatures = {
    dataZoom: {
        show: true,
        title: {
            dataZoom: 'Zoom Area',
            dataZoomReset: 'Zoom Area Back'
        }
    },
    dataView: {
        show: true,
        title: 'View',
        readOnly: false,
        lang: ['View', 'Off', 'Refresh']
    },
    magicType: {
        show: true,
        title: {
            line: 'Line Chart Switch',
            bar: 'Column Chart Switch',
            stack: 'Bulk',
            tiled: 'Tile',
            force: 'Force-directed Layout Switching',
            chord: 'Chord Chart handover',
            pie: 'Pie Switch',
            funnel: 'Funnel Plot Handover'
        },
        option: {
            // line: {...},
            // bar: {...},
            // stack: {...},
            // tiled: {...},
            // force: {...},
            // chord: {...},
            // pie: {...},
            // funnel: {...}
        },
        type: []
    },
    restore: {
        show: true,
        title: 'Restore'
    },
    saveAsImage: {
        show: true,
        title: 'Save as image',
        type: 'png',
        lang: ['Click Save']
    }
};
var objDataViewToolbox = {
    show: true,
    backgroundColor: 'rgba(0,0,0,0)',
    feature: {
        dataView: {
            show: true,
            title: 'View',
            readOnly: false,
            lang: ['data view', 'turn off', 'refresh'],
        }
    }
};
var objRestoreToolbox = {
    show: true,
    backgroundColor: 'rgba(0,0,0,0)',
    feature: {
        restore: {
            show: true,
            title: 'Restore'
        }
    }
};
var objSaveAsImageToolbox = {
    show: true,
    backgroundColor: 'rgba(0,0,0,0)',
    feature: {
        saveAsImage: {
            show: true,
            title: 'Save as image',
            type: 'png',
            lang: ['Click Save']
        }
    }
};
var objFullFeaturesToolbox = {
    show: true,
    backgroundColor: 'rgba(0,0,0,0)',
    feature: {
        dataZoom: {
            show: true,
            title: {
                dataZoom: 'Zoom Area',
                dataZoomReset: 'Zoom Area Back'
            }
        },
        dataView: {
            show: true,
            title: 'View',
            readOnly: false,
            lang: ['View', 'Off', 'Refresh']
        },
        magicType: {
            show: true,
            title: {
                line: 'Line Chart Switch',
                bar: 'Column Chart Switch',
                stack: 'Bulk',
                tiled: 'Tile',
                force: 'Force-directed Layout Switching',
                chord: 'Chord Chart handover',
                pie: 'Pie Switch',
                funnel: 'Funnel Plot Handover'
            },
            option: {
                // line: {...},
                // bar: {...},
                // stack: {...},
                // tiled: {...},
                // force: {...},
                // chord: {...},
                // pie: {...},
                // funnel: {...}
            },
            type: []
        },
        restore: {
            show: true,
            title: 'Restore'
        },
        saveAsImage: {
            show: true,
            title: 'Save as image',
            type: 'png',
            lang: ['Click Save']
        }
    }
};
var customFrameworkTheme = {
    // Default Swatches
    color: objStandardColorPalette,

    // Chart title
    title: {
        x: 'left',
        y: 'top',
        // TextAlign: null // horizontal alignment, the default settings automatically adjust the x
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc', // header border color
        borderWidth: 0, // titled border line width, units px, defaults to 0 (no border)
        padding: 5, // title within the margins, units px, parties inward default margins to 5
        itemGap: 10, // main subtitle longitudinally spaced, units px, default is 10,
        textStyle: {
            color: SFDCText,
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333' // main title text color
        },
        subtextStyle: {
            color: SFDCText // subtitle text color
        }
    },

    // Legend
    legend: {
        orient: 'horizontal', // layout, the default horizontal layout, optionally:
        // 'Horizontal' | 'vertical'
        x: 'center', // horizontal placement, the default for the whole diagram centered, optionally:
        // 'Center' | 'left' | 'right'
        // | {Number} (x coordinate, units px)
        y: 'top', // vertical placement, defaults to the top of the diagram, optionally:
        // 'Top' | 'bottom' | 'center'
        // | {Number} (y coordinates, unit px)
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc', // Legend border color
        borderWidth: 0, // Legend border width, units px, defaults to 0 (no border)
        padding: 5, // legend within the margins, units px, parties inward default margins to 5,
        // Accepts an array are set on the bottom right of the left margin, with css
        itemGap: 10, // interval, px between each item, the default is 10,
        // Horizontally spaced lateral layout, longitudinally spaced longitudinal layout
        itemWidth: 20, // legend pattern width
        itemHeight: 14, // height of the legend graphic
        textStyle: {
            color: SFDCText // Legend text color
        }
    },

    // Range
    dataRange: {
        orient: 'vertical', // layout mode, the default is a vertical layout, optionally:
        // 'Horizontal' | 'vertical'
        x: 'left', // horizontal placement, the default alignment is left whole map, optionally:
        // 'Center' | 'left' | 'right'
        // | {Number} (x coordinate, units px)
        y: 'bottom', // vertical placement, the default is the bottom of the whole map, optionally:
        // 'Top' | 'bottom' | 'center'
        // | {Number} (y coordinates, unit px)
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc', // border color range
        borderWidth: 0, // width of the border range, units px, defaults to 0 (no border)
        padding: 5, // value within the margins, units px, parties inward default margins to 5,
        // Accepts an array are set on the bottom right of the left margin, with css
        itemGap: 10, // interval, px between each item, the default is 10,
        // Horizontally spaced lateral layout, longitudinally spaced longitudinal layout
        itemWidth: 20, // range pattern width, the width of the linear gradient horizontal layout for the value 10 *
        itemHeight: 14, // height range graphics, layout height for the vertical linear gradient value * 10
        splitNumber: 5, // split the number of segments, the default is 5 for the 0:00 linear gradient
        color: ['#1e90ff', '#f0ffff'], // Color
        // Text: [ 'high', 'low'], // text, the default value for the text
        textStyle: {
            color: SFDCText // text color range
        }
    },

    toolbox: {
        orient: 'horizontal', // layout, the default horizontal layout, optionally:
        // 'Horizontal' | 'vertical'
        x: 'right', // horizontal placement, the default alignment for the whole picture right, optionally:
        // 'Center' | 'left' | 'right'
        // | {Number} (x coordinate, units px)
        y: 'top', // vertical placement, defaults to the top of the diagram, optionally:
        // 'Top' | 'bottom' | 'center'
        // | {Number} (y coordinates, unit px)
        color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
        backgroundColor: SFDCText, // background color of the Toolbox
        borderColor: '#ccc', // toolbox border color
        borderWidth: 0, // toolbox border line width, units px, defaults to 0 (no border)
        padding: 5, // margins, units px, parties inward default margins to 5,
        // Accepts an array are set on the bottom right of the left margin, with css
        itemGap: 10, // interval, px between each item, the default is 10,
        // Horizontally spaced lateral layout, longitudinally spaced longitudinal layout
        itemSize: 16, // toolbox pattern width
        featureImageIcon: {}, // custom picture icon
        featureTitle: {
            mark: 'auxiliary line switch',
            markUndo: 'delete guides',
            markClear: 'Empty guides',
            dataZoom: 'area zoom',
            dataZoomReset: 'area zoom back',
            dataView: 'view',
            lineChart: 'switching line chart',
            barChart: 'column chart switch',
            restore: 'Restore',
            saveAsImage: 'Save as image'
        }
    },

    // Prompt box
    tooltip: {
        trigger: 'item', // trigger types, trigger the default data, see below, optionally: 'item' | 'axis'
        showDelay: 20, // display delay, add delay to avoid frequent switching the display unit ms
        hideDelay: 100, // hide delay in ms
        transitionDuration: 0.4, // animation transition time, the unit s
        backgroundColor: 'rgba(0,0,0,0.7)', // prompt the background color, default to 0.7 opacity black
        borderColor: '#333', // prompt border color
        borderRadius: 4, // border rounded tips, units px, default is 4
        borderWidth: 0, // prompt border line width, units px, defaults to 0 (no border)
        padding: 5, // prompt margins, units px, parties inward default margins to 5,
        // Accepts an array are set on the bottom right of the left margin, with css
        axisPointer: {// pointer axis, the axis trigger effective
            type: 'line', // default is linear, optionally: 'line' | 'shadow'
            lineStyle: {// linear indicator style settings
                color: '#48b',
                width: 2,
                type: 'solid'
            },
            shadowStyle: {// pointer shadow style settings
                width: 'auto', // size of the shadow
                color: 'rgba(150,150,150,0.3)' // shadow color
            }
        },
        textStyle: {
            color: '#fff'
        }
    },

    // Area zoom controller
    dataZoom: {
        orient: 'horizontal', // layout, the default horizontal layout, optionally:
        // 'Horizontal' | 'vertical'
        // X: {number}, // horizontal placement, according to the default grid parameters adapted, optionally:
        // {Number} (x coordinate, units px)
        // Y: {number}, // vertical placement, according to the default grid parameters adapted, optionally:
        // {Number} (y coordinates, unit px)
        // Width: {number}, // specify the width transverse layout default parameters based on grid adaptation
        // Height: {number}, // specify the height, longitudinal layout default parameters based on grid adaptation
        backgroundColor: 'rgba(0,0,0,0)', // background color
        dataBackgroundColor: '#eee', // background color data
        fillerColor: 'rgba(144,197,237,0.2)', // Fill Color
        handleColor: 'rgba(70,130,180,0.8)' // handle color
    },

    // grid
    grid: {
        x: 80,
        y: 60,
        x2: 80,
        y2: 60,
        // Width: {totalWidth} - x - x2,
        // Height: {totalHeight} - y - y2,
        backgroundColor: 'rgba(255,255,255,255)',
        borderWidth: 1,
        borderColor: '#ccc'
    },

    // Category axis
    categoryAxis: {
        position: 'bottom',
        nameLocation: 'end',
        boundaryGap: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#48b',
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {
            show: true,
            interval: 'auto',
            // onGap: null,
            inside: false,
            length: 5,
            lineStyle: {
                color: '#333',
                width: 1
            }
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            rotate: 0,
            margin: 8,
            // formatter: null,
            textStyle: {
                color: '#333'
            }
        },
        splitLine: {
            show: true,
            // onGap: null,
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {
            show: false,
            // onGap: null,
            areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
            }
        }
    },

    valueAxis: {
        position: 'left',
        nameLocation: 'end',
        nameTextStyle: {},
        boundaryGap: [0, 0],
        splitNumber: 5,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#48b',
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {
            show: false,
            inside: false,
            length: 5,
            lineStyle: {
                color: '#333',
                width: 1
            }
        },
        axisLabel: {
            show: true,
            rotate: 0,
            margin: 8,
            // formatter: null,
            textStyle: {
                color: '#333'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
            }
        }
    },

    polar: {
        center: ['50%', '50%'],
        radius: '75%',
        startAngle: 90,
        splitNumber: 5,
        name: {
            show: true,
            textStyle: {
                color: '#333'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#333'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#ccc'
            }
        }
    },

    bar: {
        barMinHeight: 0,
        // barWidth: null,
        barGap: '30%',
        barCategoryGap: '20%',
        itemStyle: {
            normal: {
                // color: '',
                barBorderColor: '#fff',
                barBorderRadius: 0,
                barBorderWidth: 1,
                label: {
                    show: false
                }
            },
            emphasis: {
                // color: '',
                barBorderColor: 'rgba(0,0,0,0)',
                barBorderRadius: 0, barBorderWidth: 1,
                label: {
                    show: false
                }
            }
        }
    },

    // Line Chart default parameters
    line: {
        itemStyle: {
            normal: {
                // Color: different,
                label: {
                    show: false
                    // Position: default adaptation, horizontal layout for the 'top', vertical layout for the 'right', optionally
                    // 'Inside' | 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    shadowColor: 'rgba(0,0,0,0)', // default transparent
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // Color: different,
                label: {
                    show: false
                    // Position: default adaptation, horizontal layout for the 'top', vertical layout for the 'right', optionally
                    // 'Inside' | 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                }
            }
        },
        // Smooth: false,
        // Symbol: null, // inflection graph type
        symbolSize: 2, // inflection graph size
        // SymbolRotate: null, // inflection graph rotation control
        showAllSymbol: false // default logo graphic display only the spindle (spindle with the label interval concealment strategy)
    },

    // K line graph default parameters
    k: {
        // BarWidth: null // default adaptation
        // BarMaxWidth: null // default adaptation
        itemStyle: {
            normal: {
                color: '#fff', // Fill color candle
                color0: '#00aa11', // Yin fill color
                lineStyle: {
                    width: 1,
                    color: '#ff3200', // candle border color
                    color0: '#00aa11' // Yin border color
                }
            },
            emphasis: {
                // Color: different,
                // Color0: different
            }
        }
    },

    // Default parameters scatterplot
    scatter: {
        // Symbol: null, // type of graph
        symbolSize: 4, // graph size, half-width (radius) parameters, direction or when the graphic is the total width of the diamond symbolSize * 2
        // SymbolRotate: null, // graphic rotation control
        large: false, // scale scatter plots
        largeThreshold: 2000, // mass threshold, large amount of data is true and> largeThreshold to enable large-scale pattern
        itemStyle: {
            normal: {
                // Color: different,
                label: {
                    show: false
                    // Position: default adaptation, horizontal layout for the 'top', vertical layout for the 'right', optionally
                    // 'Inside' | 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                }
            },
            emphasis: {
                // Color: 'different'
                label: {
                    show: false
                    // Position: default adaptation, horizontal layout for the 'top', vertical layout for the 'right', optionally
                    // 'Inside' | 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                }
            }
        }
    },

    // Radar Chart default parameters
    radar: {
        itemStyle: {
            normal: {
                // Color: different,
                label: {
                    show: false
                },
                lineStyle: {
                    width: 2,
                    type: 'solid'
                }
            },
            emphasis: {
                // Color: different,
                label: {
                    show: false
                }
            }
        },
        // Symbol: null, // inflection graph type
        symbolSize: 2 // calculate parameters, dragging empty data suggested that pattern size
        // SymbolRotate: null, // graphic rotation control
    },

    // Default parameters Pie
    pie: {
        center: ['50% ', '50%'], // default global center
        radius: [0, '75% '],
        clockWise: true, // default counterclockwise
        startAngle: 90,
        minAngle: 0, // minimum angle to 0
        selectedOffset: 10, // sector offset is selected
        itemStyle: {
            normal: {
                // Color: different,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // Color: different,
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            emphasis: {
                // Color: different,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                label: {
                    show: false
                    // Position: 'outer'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                labelLine: {
                    show: false,
                    length: 20,
                    lineStyle: {
                        // Color: different,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },

    map: {
        mapType: 'china', // mapType temporarily in the Chinese provinces
        mapLocation: {
            x: 'center',
            y: 'center'
            // Width // adaptive
            // Height // adaptive
        },
        showLegendSymbol: true, // display the legend color logo (small dots series logo), effective in the presence of legend
        itemStyle: {
            normal: {
                // Color: different,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc' // rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {// is the selected style
                // Color: different,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: 'rgba(255,215,0,0.8)'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },

    force: {
        // Minimum and maximum data map to the radius of the circle
        minRadius: 10,
        maxRadius: 20,
        density: 1.0,
        attractiveness: 1.0,
        // Initialize the random size and position
        initSize: 300,
        // Centripetal force factor, the greater the greater the centripetal force
        centripetal: 1,
        // Cooling factor
        coolDown: 0.99,
        // If there is classification in style overrides the default style node
        itemStyle: {
            normal: {
                // Color: different,
                label: {
                    show: false
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                nodeStyle: {
                    brushType: 'both',
                    color: '#f08c2e',
                    strokeColor: '#5182ab'
                },
                linkStyle: {
                    strokeColor: '#5182ab'
                }
            },
            emphasis: {
                // Color: different,
                label: {
                    show: false
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                nodeStyle: {},
                linkStyle: {}
            }
        }
    },

    chord: {
        radius: ['65% ', '75%'],
        center: ['50% ', '50%'],
        padding: 2,
        sort: 'none', // can be 'none', 'ascending', 'descending'
        sortSub: 'none', // can be 'none', 'ascending', 'descending'
        startAngle: 90,
        clockWise: false,
        showScale: false,
        showScaleText: false,
        itemStyle: {
            normal: {
                label: {
                    show: true
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                lineStyle: {
                    width: 0,
                    color: '#000'
                },
                chordStyle: {
                    lineStyle: {
                        width: 1,
                        color: '#666'
                    }
                }
            },
            emphasis: {
                lineStyle: {
                    width: 0,
                    color: '#000'
                },
                chordStyle: {
                    lineStyle: {
                        width: 2,
                        color: '#333'
                    }
                }
            }
        }
    },

    island: {
        r: 15,
        calculateStep: 0.1 // calculate wheel step 0.1 = 10% longer
    },

    markPoint: {
        symbol: 'pin', // annotation type
        symbolSize: 10, // label size, half-width (radius) parameters, direction or when the graphic is the total width of the diamond symbolSize * 2
        // SymbolRotate: null, // label rotation control
        itemStyle: {
            normal: {
                // Color: different,
                // BorderColor: different, // label edge color, take precedence over color
                borderWidth: 2, // width dimension sideline, units px, default is 1
                label: {
                    show: true,
                    position: 'inside' // optional for the 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                }
            },
            emphasis: {
                // Color: different
                label: {
                    show: true
                    // Position: 'inside' // 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                }
            }
        }
    },

    markLine: {
        // Symbol marking the start and end of the presentation type, if all the same, you can directly transfer string
        symbol: ['circle', 'arrow'],
        // Size symbol marking the start and the end of the half-width (radius) parameters, direction or when the graphic is the total width of the diamond symbolSize * 2
        symbolSize: [2, 4],
        // Marking the start and end of the rotation control symbol
        // SymbolRotate: null,
        itemStyle: {
            normal: {
                // Color: different, // marking the main color, line color, symbol main color
                // BorderColor: with color, // symbol marking the border color, in preference to color
                borderWidth: 2, // symbol marking the border line width, units px, default is 2
                label: {
                    show: false,
                    // Optional for the 'start' | 'end' | 'left' | 'right' | 'top' | 'bottom'
                    position: 'inside',
                    textStyle: {// use global default text style, see TEXTSTYLE
                        color: '#333'
                    }
                },
                lineStyle: {
                    // Color: with borderColor, // main color, line color, and color takes priority over borderColor
                    // Width: with borderWidth, // precedence over borderWidth
                    type: 'solid',
                    shadowColor: 'rgba(0,0,0,0)', // default transparent
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // Color: different
                label: {
                    show: false
                    // Position: 'inside' // 'left' | 'right' | 'top' | 'bottom'
                    // TextStyle: null // use global default text style, see TEXTSTYLE
                },
                lineStyle: {}
            }
        }
    },

    textStyle: {
        color: SFDCText,
        decoration: 'none',
        fontFamily: '"Salesforce Sans", Arial, sans-serif',
        fontFamily2: 'Salesforce Sans', // IE8- fuzzy fonts and does not support different fonts scramble, specifies an additional
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },

    // Default list type flag graphics
    symbolList: [
        'Circle', 'rectangle', 'triangle', 'diamond',
        'EmptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
    ],
    loadingText: 'Loading ...',
    // Calculate the characteristic configuration, island, color tips
    calculable: false, // feature is disabled by default computable
    calculableColor: 'rgba(255,165,0,0.6)', // drag prompt border color
    calculableHolderColor: '#ccc', // calculate the placeholder color tips
    nameConnector: '&',
    valueConnector: ':',
    animation: true,
    animationThreshold: 2500, // animation elements threshold, resulting in more than 2500 graphic elements not original animation
    addDataAnimation: true, // whether to open data interface dynamic animation
    animationDuration: 2000,
    animationEasing: 'ExponentialOut' // BounceOut
}