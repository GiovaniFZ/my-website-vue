import { defineStore } from "pinia";
import { api } from "../lib/api/lastfm";
import type { Track } from "../interfaces/lastFM";

interface LastFMStatus {
    track: Track | null;
    loading: boolean;
    error: boolean
}

export const useLastFM = defineStore('last-fm', {
    state: (): LastFMStatus => ({
        track: null,
        loading: false,
        error: false,
    }),
    actions: {
        async requestLastFM() {
            if (this.track !== null) {
                return;
            }
            this.loading = true;
            try {
                const request = await api.get('/latest-song');
                this.track = request.data.track;
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
                this.error = true;
            } finally {
                this.loading = false;
            }
        }
    }
})