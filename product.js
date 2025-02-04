document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll(".category-item");
    const detailsContent = document.getElementById("details-content");

    categoryItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const category = event.target.id;
            showCategoryDetails(category);
        });
    });

    // Function to update details content based on category
    function showCategoryDetails(category) {
        let content = '';

        switch (category) {
            case 'sensor':
                content = `
                    <div class="product-card">
                        <img src="img/sensor1.jpg" alt="Sensor 1">
                        <h4>Temperature Sensor</h4>
                        <p>A reliable temperature sensor for industrial applications.</p>
                        <div class="price">$25.00</div>
                    </div>
                    <div class="product-card">
                        <img src="img/sensor2.jpg" alt="Sensor 2">
                        <h4>Humidity Sensor</h4>
                        <p>Monitor humidity levels in real-time for optimal performance.</p>
                        <div class="price">$30.00</div>
                    </div>
                    <div class="product-card">
                        <img src="img/sensor3.jpg" alt="Sensor 3">
                        <h4>Pressure Sensor</h4>
                        <p>High-accuracy pressure sensors for various applications.</p>
                        <div class="price">$40.00</div>
                    </div>
                `;
                break;
            case 'iai':
                content = `
                    <div class="product-card">
                        <img src="img/iai1.jpg" alt="IAI Product 1">
                        <h4>IAI Robot Arm</h4>
                        <p>Precise robotic arm for industrial automation tasks.</p>
                        <div class="price">$500.00</div>
                    </div>
                    <div class="product-card">
                        <img src="img/iai2.jpg" alt="IAI Product 2">
                        <h4>IAI Linear Actuator</h4>
                        <p>High-performance actuators for precise linear movement.</p>
                        <div class="price">$200.00</div>
                    </div>
                `;
                break;
            case 'plc':
                content = `
                    <div class="product-card">
                        <img src="img/plc1.jpg" alt="PLC 1">
                        <h4>PLC Controller</h4>
                        <p>Reliable PLC controller for industrial control systems.</p>
                        <div class="price">$150.00</div>
                    </div>
                    <div class="product-card">
                        <img src="img/plc2.jpg" alt="PLC 2">
                        <h4>Programmable Logic Controller</h4>
                        <p>Advanced PLC for complex control systems.</p>
                        <div class="price">$350.00</div>
                    </div>
                `;
                break;
            case 'printer3d':
                content = `
                    <div class="product-card">
                        <img src="img/printer3d1.jpg" alt="3D Printer 1">
                        <h4>3D Printer FDM</h4>
                        <p>Affordable FDM 3D printer for rapid prototyping.</p>
                        <div class="price">$400.00</div>
                    </div>
                    <div class="product-card">
                        <img src="img/printer3d2.jpg" alt="3D Printer 2">
                        <h4>SLA 3D Printer</h4>
                        <p>High-resolution SLA 3D printer for detailed models.</p>
                        <div class="price">$800.00</div>
                    </div>
                `;
                break;
            default:
                content = `<h4>Select a category</h4><p>Click on a category to view more details.</p>`;
                break;
        }

        detailsContent.innerHTML = content;
    }
});
