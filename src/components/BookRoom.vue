<!--
This is a booking tool
TODO: Rename this to someting appropriate
-->
<template>
    <div style="padding-top:15em;" class="col-md-12">
        <div class="col-md-12 booking">
            <h3>Verifica disponibilitatea</h3>
            <div class="col-md-2 dropdown">
                <select class="form-control dropdown">
                    <option value="one">Tipul Camerei</option>
                    <option value="two">Camera Single</option>
                    <option value="three">Camera Dubla</option>
                    <option value="four">Camera Tripla</option>
                    <option value="five">Apartament</option>
                </select>
            </div>
            <div class="col-md-2 start-from">
                <div class="form-group label-static">
                    <label class="control-label">Sosire</label>
                    <input type="text" class="datepicker form-control" value="Incepand Din:" />
                </div>
            </div>
            <div class="col-md-2 start-from">
                <div class="form-group label-static">
                    <label class="control-label">Plecare</label>
                    <input type="text" class="datepicker form-control" value="Pana La:" />
                </div>
            </div>
            <div class="col-md-2 dropdown">
                <select class="form-control dropdown">
                    <option value="one">Nr. Adulti</option>
                    <option value="two">1</option>
                    <option value="three">2</option>
                    <option value="four">3</option>
                    <option value="five">4</option>
                </select>
            </div>
            <div class="col-md-2 dropdown">
                <select class="form-control dropdown">
                    <option value="one">Nr. Copii</option>
                    <option value="two">0</option>
                    <option value="three">1</option>
                    <option value="four">2</option>
                    <option value="five">3</option>
                </select>
            </div>
            <div class="col-md-2 book-now">
                <button class="btn btn-success">Verifica<div class="ripple-container"></div></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	name: 'bookroom',
}

</script>
<style>
    .booking{
        background-color: #ffffff;
        border-radius: 10px;
        min-height: 200px;
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    }
    .booking h3{
        color:black;
        padding: .5em;
    }
    .dropdown{
        padding-bottom: 5px;
    }
    .book-now{
        padding-top: 10px;
    }
    
</style>