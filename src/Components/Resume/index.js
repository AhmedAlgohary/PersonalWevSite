import React from 'react';
import './style.css'
 const Resume = () => {
        return(
                <div class="creative">
                    <div class="container">
                        <div class="creative-info">
                            <h2 class="info-title"><span>This is</span> Me</h2>
                            <h4 class="info-dir">Creative Director</h4>
                            <p class="info-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                            </p>
                            <p class="info-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="social-media">
                    
                    <div class="social face">
                        <i class="icon fa fa-facebook fa-lg"></i>
                        <p>
                            <span class="info1">Follow Me on</span>
                            <span class="info2">Social Facebook</span>
                        </p>
                    </div>
                    
                    <div class="social twitter">
                        <i class="icon fa fa-twitter fa-lg"></i>
                        <p>
                            <span class="info1">Tweet Me on</span>
                            <span class="info2">Social twitter</span>
                        </p>
                    </div>
                    
                    <div class="social pin">
                        <i class="icon fa fa-pinterest fa-lg"></i>
                        <p>
                            <span class="info1">Pin Me on</span>
                            <span class="info2">Social Pinterest</span>
                        </p>
                    </div>
                </div>
    )
}
export default Resume;