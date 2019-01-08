import React from 'react';

const {scrollingAspectRatioModule, $elAll, getElementOuterHeight} = require('./../../commonModule/commonModule');
let allSectionElementHeight = 0, totalCountOfPagination, everySectionOffsetTop=[], allPaginationHeight, counterAdding, everyPaginationActiveClassState=[], paginationPixelPropotionate;


export default class StickyScaleComponent extends React.Component {
    constructor(props){
        super(props);
        this.getAllElementHeightOffset = this.getAllElementHeightOffset.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.createPaginationList = this.createPaginationList.bind(this);
        this.onScrolling = this.onScrolling.bind(this);
       
        this.state = {
            allPaginationVisibility: false,
            totalCountOfPagination: 0,
            allSectionElementHeight: 0,
            counterAdding:0,
            everyPaginationActiveClassState: [],
            everySectionOffsetTop: [],
            paginationPixelPropotionate
            
        }
    }
    componentDidMount(){
        const that = this;
       
        setTimeout(()=>{
            let count = 0;
            that.getAllElementHeightOffset();
            if(count < 1){
                this.createPaginationList();
                count = 1;
            }
            this.onScrolling();
        }, 1500)
    }

    getAllElementHeightOffset(){
        let arrayOfEverySectionElements = Array.from($elAll('.js-scale-sticky'));
            totalCountOfPagination = arrayOfEverySectionElements.length;
            arrayOfEverySectionElements.forEach((opt, ind)=> {
               if(opt){
                   allSectionElementHeight = allSectionElementHeight+opt.clientHeight;
                   everySectionOffsetTop.push(opt.offsetTop);
               }
            })

            this.setState(() => {
               return {
                   allSectionElementHeight,
                   totalCountOfPagination,
                   everySectionOffsetTop,
                   allPaginationHeight
               } 
            });

            // console.log(allSectionElementHeight, totalCountOfPagination, everySectionOffsetTop, allPaginationHeight)
        }

      onScrolling(){
        window.addEventListener('scroll', this.createPaginationList, false);
      }

      createPaginationList(){
          
            if(allSectionElementHeight > 0 ){
                allPaginationHeight = 18 * totalCountOfPagination;
            
              let scrollingDiff = (allSectionElementHeight - window.scrollY);

              paginationPixelPropotionate = scrollingAspectRatioModule(allPaginationHeight, scrollingDiff, allSectionElementHeight );
             
       
              
               let currentPosition =  everySectionOffsetTop.filter( (position) => {
                   return (position <= (window.scrollY - getElementOuterHeight('footer') ) );
                } );

                counterAdding = currentPosition.length +1;
                
                everyPaginationActiveClassState = new Array();
               
                for(var i=0; i < 6; i++){
                    if((counterAdding -1) === i){
                        everyPaginationActiveClassState.push(true)
                    }
                    else {
                        everyPaginationActiveClassState.push(false)
                    }
                }

                this.setState( () => {
                 return {
                     everyPaginationActiveClassState,
                     counterAdding,
                     paginationPixelPropotionate: paginationPixelPropotionate
                    }
                 })
            }
      }   
    render(){
        let tpaginationPixelPropotionate = allPaginationHeight - this.state.paginationPixelPropotionate;
            if(tpaginationPixelPropotionate >  (allPaginationHeight)){
                tpaginationPixelPropotionate = allPaginationHeight;
            }

        return (
            <div className="sticky__scale"> 
                <div className="enum-pos">
                    <span className="enum-data" style={{marginTop: tpaginationPixelPropotionate, position: 'absolute'}}>
                         {this.state.counterAdding < 10 ? '0'+this.state.counterAdding : this.state.counterAdding }
                    </span>
                </div>
                <ul className="list-unstyle">
                    {this.state.everySectionOffsetTop.length > 0  ? this.state.everySectionOffsetTop.map( (opt, ind)=>{

                        return (
                        <NumberComponent 
                            key={'kk_'+ind}
                            counterAdding={this.state.counterAdding}
                            activeDeactiveClass={ this.state.everyPaginationActiveClassState[ind] ? 'sticky__scale--item active' : 'sticky__scale--item '}
                            />
                   ) 
                    }): ''
                    
                }
                   
                </ul>
            </div>
        )
    }
       
}

const NumberComponent = (props) => {
        return (
            <li className={props.activeDeactiveClass}>
                <span className="num">{props.counterAdding}</span>
            </li>    
        );
    }