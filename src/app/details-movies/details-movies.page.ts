import {Component, OnInit} from '@angular/core';
import {ProjectInterface} from "../project-interface";
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../Service/data.service";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {QrcodeService} from "../../Service/qrcode.service";
import {ToastController} from "@ionic/angular";
import {VoteService} from "../../Service/vote.service";

@Component({
    selector: 'app-details-movies',
    templateUrl: './details-movies.page.html',
    styleUrls: ['./details-movies.page.scss'],
})
export class DetailsMoviesPage implements OnInit {

    infoMovie: ProjectInterface;
    prizeId;

    constructor(private router: ActivatedRoute, private data: DataService, private barcodeScanner: BarcodeScanner, private qrcodeService: QrcodeService, private toastController: ToastController, private voteService: VoteService) {
    }

    ngOnInit() {
        this.init();
    }

    ionViewWillEnter() {
        this.init();
    }

    init() {
        this.router.queryParamMap.subscribe(params => {
            this.prizeId = params.get('prizeId');
        });
        this.infoMovie = JSON.parse(sessionStorage.getItem('infoMovie'));
    }

    ionViewDidLeave() {
        sessionStorage.removeItem('infoMovie');
    }

    vote() {
        this.barcodeScanner.scan().then(scanResult => {
            if (scanResult) {
                this.qrcodeService.getByUuid(scanResult.text).subscribe(res => {
                    if (res) {
                        const body = {
                            projet: this.infoMovie['@id'],
                            prize: '/api/prizes/' + this.prizeId
                        };

                        this.voteService.create(body).subscribe(res => {
                            this.presentToast('Vote efféctué avec succès');
                        });
                    } else {
                        this.presentToast('QR code Invalid');
                    }
                });
            }
        });
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
}
